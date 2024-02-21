import { IItem } from '@/models/Cart'
import { Order } from '@/models/Order'
import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'

interface CartState {
  cart: IItem[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const newItem = action.payload.item

      return produce(state, (draft) => {
        const itemAlreadyExists = draft.cart.find(
          (item) => item.id === newItem.id,
        )

        if (itemAlreadyExists) {
          itemAlreadyExists.quantity += newItem.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      return produce(state, (draft) => {
        const itemToRemoveId = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.cart.splice(itemToRemoveId, 1)
      })
    }
    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const cartItem = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (cartItem) {
          cartItem.quantity++
        }
      })
    }
    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const cartItem = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (cartItem && cartItem.quantity > 1) {
          cartItem.quantity--
        }
      })
    }
    case ActionTypes.CHECKOUT_CART: {
      const newOrder: Order = {
        ...action.payload.order,
        id: new Date().getTime(),
        items: state.cart,
      }

      return produce(state, (draft) => {
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    }

    default:
      return state
  }
}
