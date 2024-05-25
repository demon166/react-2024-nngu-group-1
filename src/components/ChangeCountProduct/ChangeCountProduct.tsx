import MyButton from "../MyButton/MyButton.tsx";
import { FC } from "react";

interface ChangeCountProductProps {
  count: number;
  onIncrementCount: () => void;
  onDecrementCount: () => void;
}

const ChangeCountProduct: FC<ChangeCountProductProps> = (props) => {
  const { onIncrementCount, count, onDecrementCount } = props;
  return (
    <div>
      <MyButton onClick={onIncrementCount}> + </MyButton>
      {count}
      <MyButton onClick={onDecrementCount}> - </MyButton>
    </div>
  );
};

export default ChangeCountProduct;
