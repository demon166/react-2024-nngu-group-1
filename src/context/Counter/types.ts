import { Dispatch } from "react";

export interface CounterType {
  counter: number;
}

export enum ActiveType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type CounterAction =
  | { type: ActiveType.INCREMENT; payload: number }
  | { type: ActiveType.DECREMENT; payload: number };

export interface CounterContextType {
  state: CounterType;
  dispatch: Dispatch<CounterAction>;
}
