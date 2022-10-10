import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  isLoading: false,
  error: false,
};
export const fetchCart = createAsyncThunk("cart", async (user_id) => {
  const response = await axios.get(
    `http://localhost:4000/v1/cart/find/usercarts/${user_id}`
  );
  return response.data;
});
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanCart: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});
export const { cleanCart } = CartSlice.actions;

export default CartSlice.reducer;
