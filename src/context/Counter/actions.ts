import { ActiveType } from "./types";

export const increment = (value: number) => ({
  type: ActiveType.INCREMENT,
  payload: value,
});

export const decrement = (value: number) => ({
  type: ActiveType.DECREMENT,
  payload: value,
});
