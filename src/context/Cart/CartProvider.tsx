import { createContext, Dispatch, FC, ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import { cartReducer } from "./reducer";
import { initialState } from "./initialState";
import { CartAction, CartType } from "./types";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<{
  cart: CartType;
  dispatch: Dispatch<CartAction>;
}>({
  cart: {
    ...initialState,
  },
  dispatch: () => {},
});

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useImmerReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
