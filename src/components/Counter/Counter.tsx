import { useContext, useState } from "react";
import { CounterContext } from "@/context";
import { decrement, increment } from "@/context/Counter/actions";

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const { state, dispatch } = useContext(CounterContext);

  const handleIncrement = () => {
    dispatch(increment(value));
  };
  const handleDecrement = () => {
    dispatch(decrement(value));
  };

  return (
    <div>
      <h2>{state.counter}</h2>
      <input
        type="number"
        value={value}
        onChange={(event) => {
          setValue(+event.target.value);
        }}
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
