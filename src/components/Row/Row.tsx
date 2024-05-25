import { FC } from "react";

interface RowPros {
  children?: React.ReactNode;
  direction?: "row" | "column";
}
const Row: FC<RowPros> = (props) => {
  const { children, direction = "row" } = props;
  console.log("Row");
  return (
    <div style={{ display: "flex", flexDirection: direction, gap: "20px" }}>
      {children}
    </div>
  );
};

export default Row;
