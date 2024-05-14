import { IProduct } from '@/data/Product';
import { stripe } from '@/lib/stripe';
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

interface SuccessProps {
  customerName: string;
  products: IProduct[];
}

export default function Success({
  customerName,
  products,
}: Readonly<SuccessProps>) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} alt="" width={130} height={145} />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = checkoutSession.customer_details?.name;
  const lineItems = checkoutSession.line_items?.data;

  const products = lineItems?.map((lineItem) => {
    const productInfo = lineItem.price?.product as Stripe.Product;

    return {
      id: productInfo.id,
      name: productInfo.name,
      imageUrl: productInfo.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
