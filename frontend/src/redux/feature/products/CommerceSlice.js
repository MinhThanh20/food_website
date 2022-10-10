import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  isLoading: false,
  login: false,
  user: [],
  error: false,
  searchValue: "",
};
export const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios.get("http://localhost:4000/v1/products/");
  return response.data;
});
export const commmerceSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.login = true;
      state.user = action.payload;
      return state;
    },
    isLogout: (state, action) => {
      state.login = false;
    },
    searchProduct: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});
export const { isLogin, isLogout, searchProduct } = commmerceSlice.actions;

export default commmerceSlice.reducer;
