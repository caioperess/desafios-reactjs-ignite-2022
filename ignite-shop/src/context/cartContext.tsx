import { IProduct } from '@/data/Product';
import {
  addItemAction,
  checkoutCartAction,
  removeItemAction,
} from '@/reducers/cart/actions';
import { CartState, cartReducer } from '@/reducers/cart/reducer';
import { isClientSide } from '@/utils/isClientSide';
import axios from 'axios';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

interface CartContextData {
  cart: IProduct[];
  addItemToCart: (item: IProduct) => void;
  removeItemFromCart: (itemId: IProduct['id']) => void;
  handleCheckoutCart: (products_ids: string[]) => Promise<void>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const initialStateFn = () => {
  if (isClientSide) {
    const storageValue = localStorage.getItem('@ignite-shop:cart-state');

    if (storageValue) {
      const parsedValue = JSON.parse(storageValue) as CartState;

      return parsedValue;
    }
  }

  return { cart: [] };
};

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      return initialStateFn();
    },
  );

  const addItemToCart = useCallback((item: IProduct) => {
    dispatch(addItemAction(item));
  }, []);

  const removeItemFromCart = useCallback((itemId: IProduct['id']) => {
    dispatch(removeItemAction(itemId));
  }, []);

  const handleCheckoutCart = useCallback(async (products_ids: string[]) => {
    try {
      const response = await axios.post('/api/checkout', {
        products_ids,
      });

      const { checkoutUrl } = response.data;

      dispatch(checkoutCartAction());
      window.location.href = checkoutUrl;
    } catch (err) {
      alert('Falha ao redirecionar ao checkout');
    }
  }, []);

  useEffect(() => {
    if (isClientSide) {
      localStorage.setItem(
        '@ignite-shop:cart-state',
        JSON.stringify(cartState),
      );
    }
  }, [cartState]);

  const providerValue = useMemo(
    () => ({
      cart: cartState.cart,
      addItemToCart,
      removeItemFromCart,
      handleCheckoutCart,
    }),
    [cartState, addItemToCart, removeItemFromCart, handleCheckoutCart],
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };

