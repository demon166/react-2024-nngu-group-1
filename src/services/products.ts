import { api } from "@/app/api";
import { ProductResponse, ProductStoreRequest } from "@/types/product";

export const getProducts = async ({ queryKey }) => {
  const { currentPage, perPage } = queryKey[1];
  const { data } = await api.get<ProductResponse>("/products", {
    params: {
      _page: currentPage,
      _per_page: perPage,
    },
    transformResponse: (data) => {
      const dataObj = JSON.parse(data);
      console.log(dataObj);
      return {
        products: dataObj.data,
        pagination: {
          first: dataObj.first,
          items: dataObj.items,
          last: dataObj.last,
          next: dataObj.next,
          pages: dataObj.pages,
          prev: dataObj.prev,
        },
      };
    },
  });
  return data;
};

export const storeProduct = async (product: ProductStoreRequest) => {
  const { data } = await api.post("/products", product);
  return data;
};
