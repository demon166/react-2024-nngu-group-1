import { FC } from "react";
import { MyButton } from "@/components";

interface ChangeCountProductProps {
  count: number;
  onIncrementCount: () => void;
  onDecrementCount: () => void;
  handleChangeCount: React.ChangeEventHandler<HTMLInputElement>;
}

const ChangeCountProduct: FC<ChangeCountProductProps> = (props) => {
  const { onIncrementCount, count, onDecrementCount, handleChangeCount } =
    props;
  return (
    <div>
      <MyButton onClick={onIncrementCount}> + </MyButton>
      <input type="number" value={count} onChange={handleChangeCount} />
      <MyButton onClick={onDecrementCount}> - </MyButton>
    </div>
  );
};

export default ChangeCountProduct;
