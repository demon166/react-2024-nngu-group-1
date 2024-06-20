export interface ProductItem {
  id: string;
  name: string;
  price: string;
  discount?: {
    type: discountType;
    value: number;
  };
  count?: number;
}

export interface ProductResponse {
  products: ProductItem[];
  pagination: Pagination;
}

export interface Pagination {
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export type discountType = "percent" | "fix";

export type ProductStoreRequest = Omit<ProductItem, "id" | "count">;

interface ProductItemInCart extends ProductItem {
  count: number;
}

export interface ICart {
  items: ProductItemInCart[];
}
