import { IItem } from '@/models/Cart'
import { Order } from '@/models/Order'
import { OrderInfo } from '@/pages/Checkout'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '@/reducers/cart/actions'
import { cartReducer } from '@/reducers/cart/reducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: IItem[]
  orders: Order[]
  addItemToCart: (item: IItem) => void
  removeItemFromCart: (itemId: IItem['id']) => void
  incrementItemQuantityInCart: (itemId: IItem['id']) => void
  decrementItemQuantityInCart: (itemId: IItem['id']) => void
  checkoutCart: (order: OrderInfo) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextType)

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [], orders: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const navigate = useNavigate()

  function addItemToCart(item: IItem) {
    dispatch(addItemAction(item))
  }

  function removeItemFromCart(itemId: IItem['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementItemQuantityInCart(itemId: IItem['id']) {
    dispatch(incrementItemAction(itemId))
  }

  function decrementItemQuantityInCart(itemId: IItem['id']) {
    dispatch(decrementItemAction(itemId))
  }

  function checkoutCart(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:cart-state',
      JSON.stringify(cartState),
    )
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        orders: cartState.orders,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantityInCart,
        decrementItemQuantityInCart,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  return useContext(CartContext)
}

export { CartContextProvider, useCart }

