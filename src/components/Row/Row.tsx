import { FC } from "react";

interface RowPros {
  children?: React.ReactNode;
  direction?: "row" | "column";
  wrap: boolean;
}
const Row: FC<RowPros> = (props) => {
  const { children, direction = "row", wrap } = props;
  console.log("Row");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: "20px",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
};

export default Row;
