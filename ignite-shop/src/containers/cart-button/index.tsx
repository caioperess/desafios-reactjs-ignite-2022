'use client';

import { CartIcon } from '@/components/ui/CartIcon';
import { useCart } from '@/context/cartContext';
import { useEffect, useState } from 'react';
import { CartBadge, CartButtonContainer } from './styles';

interface CartButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isOnHeader?: boolean;
  color?: 'primary' | 'default' | 'active';
}

export function CartButton({
  isOnHeader = false,
  color,
  ...rest
}: Readonly<CartButtonProps>) {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  const hasItemOnCart = cart.length > 0;

  const selectColor = () => {
    if (color) {
      return color;
    }

    return hasItemOnCart ? 'active' : 'default';
  };

  useEffect(() => {
    setIsMounted(true); // Component is mounted on client-side
    return () => setIsMounted(false); // Clean up on unmount
  }, []);

  return (
    <CartButtonContainer color={selectColor()} {...rest}>
      {isMounted && isOnHeader && hasItemOnCart && (
        <CartBadge>
          <span>{cart.length}</span>
        </CartBadge>
      )}
      <CartIcon />
    </CartButtonContainer>
  );
}
