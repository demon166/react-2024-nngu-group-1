import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider, CartProvider, ThemeProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CounterProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CounterProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
