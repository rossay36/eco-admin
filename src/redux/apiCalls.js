import { publicReq, userReq } from "../reqMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { usersStart, usersSuccess, usersFailure } from "./usersRedux";
import {
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
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(usersStart());
  try {
    const res = await userReq.get("/users");
    dispatch(usersSuccess(res.data));
  } catch (err) {
    dispatch(usersFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(productStart());
  try {
    const res = await publicReq.get("/product");
    dispatch(productSuccess(res.data));
  } catch (err) {
    dispatch(productFailure());
  }
};
export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userReq.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // UPDATE
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userReq.post("/product", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
