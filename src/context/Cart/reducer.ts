import { ImmerReducer } from "use-immer";
import { ActionTypes, CartAction, CartType } from "./types";

export const cartReducer: ImmerReducer<CartType, CartAction> = (
  draftState,
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.CHANGE_COUNT: {
      if (payload.count < 0) {
        break;
      }
      if (payload.count === 0) {
        draftState.items = draftState.items.filter(
          (product) => product.id !== payload.product.id,
        );
      }
      const findElement = draftState.items.find(
        (product) => product.id === payload.product.id,
      );

      if (findElement) {
        findElement.count = payload.count;
      } else {
        draftState.items.push({ ...payload.product, count: payload.count });
      }
      break;
    }
    case ActionTypes.REMOVE_ITEM:
      draftState.items = draftState.items.filter(
        (product) => product.id !== payload.productId,
      );
      break;
    case ActionTypes.REMOVE_ALL_ITEMS:
      draftState.items = [];
      break;
    default:
      break;
  }
};
