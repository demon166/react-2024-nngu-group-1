export interface ProductItem {
  id: number;
  name: string;
  price: number;
  discount?: {
    type: "percent" | "fix";
    value: number;
  };
}

interface ProductItemInCart extends ProductItem {
  count: number;
}

export interface ICart {
  items: ProductItemInCart[];
}
