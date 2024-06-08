import { ActionTypes, CartAction } from "@/context/Cart/types";
import { ProductItem } from "@/types";

export const changeCount = (
  product: ProductItem,
  count: number,
): CartAction => ({
  type: ActionTypes.CHANGE_COUNT,
  payload: { product, count },
});

export const removeItem = (productId: number): CartAction => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: { productId },
});

export const removeAllItem = (): CartAction => ({
  type: ActionTypes.REMOVE_ALL_ITEMS,
  payload: undefined,
});
