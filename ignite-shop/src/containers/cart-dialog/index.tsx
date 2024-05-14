import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCart } from '@/context/cartContext';
import { formatToBRL } from '@/utils/formatToBRL';
import Image from 'next/image';
import { useState } from 'react';
import {
  CheckoutButton,
  FooterContent,
  ImageContainer,
  InfoText,
  ProductContainer,
  ProductInfo,
  ProductListContainer,
} from './styles';

export function CartDialog() {
  const { cart, removeItemFromCart, handleCheckoutCart } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const hasItemsOnCart = cart.length > 0;

  const formattedProductsToCheckout = cart.reduce<{
    products_ids: string[];
    total_price: number;
  }>(
    (acc, current) => {
      acc.products_ids.push(current.defaultPriceId);
      acc.total_price += current.price;

      return acc;
    },
    { products_ids: [], total_price: 0 },
  );

  const handleRemoveProductFromCart = (itemId: string) => {
    removeItemFromCart(itemId);
  };

  const handleCheckout = async () => {
    setIsCreatingCheckoutSession(true);
    await handleCheckoutCart(formattedProductsToCheckout.products_ids);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sacola de compras</DialogTitle>
      </DialogHeader>

      <ProductListContainer>
        {!hasItemsOnCart && <span>Carrinho vazio</span>}
        {hasItemsOnCart &&
          cart.map((product) => (
            <ProductContainer key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} alt="" width={100} height={100} />
              </ImageContainer>

              <ProductInfo>
                <h3>{product.name}</h3>
                <span>{product.price_text}</span>

                <button
                  type="button"
                  onClick={() => handleRemoveProductFromCart(product.id)}
                >
                  Remover
                </button>
              </ProductInfo>
            </ProductContainer>
          ))}
      </ProductListContainer>

      {hasItemsOnCart && (
        <DialogFooter>
          <FooterContent>
            <InfoText>Quantidade</InfoText>
            <InfoText color="text" align="end" fontSize="lg">
              {cart.length} item(s)
            </InfoText>

            <InfoText fontSize="lg">
              <strong>Valor total</strong>
            </InfoText>
            <InfoText align="end" fontSize="xl">
              <strong>
                {formatToBRL(formattedProductsToCheckout.total_price)}
              </strong>
            </InfoText>
          </FooterContent>

          <CheckoutButton
            type="button"
            disabled={isCreatingCheckoutSession}
            onClick={handleCheckout}
          >
            Finalizar compra
          </CheckoutButton>
        </DialogFooter>
      )}
    </DialogContent>
  );
}
