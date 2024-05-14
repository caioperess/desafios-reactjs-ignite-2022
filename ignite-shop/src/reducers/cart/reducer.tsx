import { IProduct } from '@/data/Product';
import { produce } from 'immer';
import { CartActionTypes, CartActions } from './actions';

export interface CartState {
  cart: IProduct[];
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const newItem = action.payload.item;

      return produce(state, (draft) => {
        const itemAlreadyExists = draft.cart.find(
          (item) => item.id === newItem.id,
        );

        if (!itemAlreadyExists) {
          draft.cart.push(newItem);
        }
      });
    }
    case CartActionTypes.REMOVE_ITEM: {
      const itemToRemoveId = action.payload.itemId;

      return produce(state, (draft) => {
        const itemToRemoveIndex = draft.cart.findIndex(
          (item) => item.id === itemToRemoveId,
        );
        draft.cart.splice(itemToRemoveIndex, 1);
      });
    }
    case CartActionTypes.CHECKOUT_CART: {
      return { cart: [] } as CartState;
    }
  }
}
