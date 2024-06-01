import { ImmerReducer } from "use-immer";
import { ActiveType, CounterAction, CounterType } from "./types";

export const reducer: ImmerReducer<CounterType, CounterAction> = (
  draftState,
  action,
) => {
  switch (action.type) {
    case ActiveType.INCREMENT:
      draftState.counter += action.payload;
      break;
    case ActiveType.DECREMENT:
      draftState.counter -= action.payload;
      break;
    default:
      break;
  }
};
