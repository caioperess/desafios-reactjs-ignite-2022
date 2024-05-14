import { useCart } from '@/context/cartContext';
import { IProduct } from '@/data/Product';
import { stripe } from '@/lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import { formatToBRL } from '@/utils/formatToBRL';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: Readonly<ProductProps>) {
  const { addItemToCart } = useCart();

  const handleAddItemToCart = () => {
    addItemToCart(product);
  };

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price_text}</span>

          <p>{product.description}</p>

          <button type="button" onClick={handleAddItemToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id ?? '';

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: price.unit_amount ? price.unit_amount / 100 : null,
        price_text: price.unit_amount
          ? formatToBRL(price.unit_amount / 100)
          : null,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
