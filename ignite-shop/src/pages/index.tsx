import { IProduct } from '@/data/Product';
import { stripe } from '@/lib/stripe';
import { HomeContainer, Product, ProductInfo } from '@/styles/pages/home';
import { formatToBRL } from '@/utils/formatToBRL';
import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

import { CartButton } from '@/containers/cart-button';
import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: Readonly<HomeProps>) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />

              <footer>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{product.price_text ?? 'Sem valor'}</span>
                </ProductInfo>

                <CartButton color="primary" />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : null,
      price_text: price.unit_amount
        ? formatToBRL(price.unit_amount / 100)
        : null,
    };
  });

  return {
    props: {
      products,
    },
  };
};
