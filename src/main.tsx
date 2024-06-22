import React from "react";
import ReactDOM from "react-dom/client";
import { CounterProvider, CartProvider, ThemeProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@/route/publicRouter";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CounterProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </CounterProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
