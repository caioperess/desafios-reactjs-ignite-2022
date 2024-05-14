'use client'

import logoImg from '@/assets/logo.svg';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CartButton } from '@/containers/cart-button';
import { CartDialog } from '@/containers/cart-dialog';
import { CartProvider } from '@/context/cartContext';
import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false);

  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="ignite.shop" />
          </Link>

          <Dialog open={isCartDialogOpen} onOpenChange={setIsCartDialogOpen}>
            <DialogTrigger asChild>
              <CartButton isOnHeader />
            </DialogTrigger>

            <CartDialog />
          </Dialog>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
