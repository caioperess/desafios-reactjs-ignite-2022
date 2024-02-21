import { IItem } from '@/models/Cart'
import { OrderInfo } from '@/pages/Checkout'
import { NavigateFunction } from 'react-router-dom'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: IItem
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: IItem['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }

export function addItemAction(item: IItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incrementItemAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementItemAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
