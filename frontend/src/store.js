import { configureStore } from "@reduxjs/toolkit";
import commerceSlice from "./redux/feature/products/CommerceSlice";
import cartSlice from "./redux/feature/cart/cartSlice";
export const store = configureStore({
  reducer: {
    commerceSlice,
    cartSlice,
  },
});
