export interface ProductItem {
  id: number;
  name: string;
  price: number;
  discount?: {
    type: "percent" | "fix";
    value: number;
  };
}
