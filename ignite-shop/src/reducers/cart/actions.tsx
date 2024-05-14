import { IProduct } from '@/data/Product';

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type CartActions =
  | {
      type: CartActionTypes.ADD_ITEM;
      payload: {
        item: IProduct;
      };
    }
  | {
      type: CartActionTypes.REMOVE_ITEM;
      payload: {
        itemId: IProduct['id'];
      };
    }
  | {
      type: CartActionTypes.CHECKOUT_CART;
      payload: {};
    };

export function addItemAction(item: IProduct) {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies CartActions;
}

export function removeItemAction(itemId: string) {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies CartActions;
}

export function checkoutCartAction() {
  return {
    type: CartActionTypes.CHECKOUT_CART,
    payload: {},
  } satisfies CartActions;
}
