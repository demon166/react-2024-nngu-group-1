import { ProductItem } from "@/types";

export interface CartType {
  items: ProductItem[];
}

export enum ActionTypes {
  CHANGE_COUNT = "CHANGE_COUNT",
  REMOVE_ITEM = "REMOVE_ITEM",
  REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS",
}

export type CartAction =
  | {
      type: ActionTypes.CHANGE_COUNT;
      payload: {
        product: ProductItem;
        count: number;
      };
    }
  | {
      type: ActionTypes.REMOVE_ITEM;
      payload: {
        productId: number;
      };
    }
  | { type: ActionTypes.REMOVE_ALL_ITEMS; payload: undefined };
