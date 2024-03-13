import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL PRODUCT
    productStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    productSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    productFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE A PRODUCT
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE A PRODUCT
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  productStart,
  productSuccess,
  productFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
