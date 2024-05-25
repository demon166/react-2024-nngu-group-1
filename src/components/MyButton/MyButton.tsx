import { FC } from "react";

interface MyButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <>
      <button className="btn btn-success" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default MyButton;
