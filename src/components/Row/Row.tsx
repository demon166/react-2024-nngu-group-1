import { FC } from "react";

interface RowPros {
  children?: React.ReactNode;
  direction?: "row" | "column";
}
const Row: FC<RowPros> = (props) => {
  const { children, direction = "row" } = props;
  return (
    <div style={{ display: "flex", flexDirection: direction }}>{children}</div>
  );
};

export default Row;
