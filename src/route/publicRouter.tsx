import { createBrowserRouter } from "react-router-dom";
import { HomePage, CatalogPage, ErrorPage, ProductPage } from "@/views";
import { PublicLayout } from "@/layout";
import { RouteVariable } from "@/route/constants";

export const router = createBrowserRouter([
  {
    path: RouteVariable.home,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouteVariable.catalog,
        element: <CatalogPage />,
      },
      {
        path: RouteVariable.productDetail,
        element: <ProductPage />,
      },
      {
        path: RouteVariable.about,
        element: <div>О нас</div>,
      },
    ],
  },
]);
