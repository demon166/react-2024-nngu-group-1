import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from "@/context";
import ThemeProvider from "@/context/Theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CounterProvider>
  </React.StrictMode>,
);
