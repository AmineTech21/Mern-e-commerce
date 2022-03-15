import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess /*logoutSuccess*/} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { addProduct, emptyCart } from "./cartRedux";

//========================= LOGIN ========================//
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//========================= Register ========================//
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    dispatch(emptyCart())
  } catch (err) {
    dispatch(registerFailure());
  }
};

//========================= Register ========================//
// export const createCart = async (dispatch, user) => {
//   try {
//     const res = await publicRequest.post("/carts", user);
//     dispatch(addProduct(res.data));
//   } catch (err) {}
// };

// export const logout = async (dispatch, user) => {
//   try {
//     const res = await publicRequest.post("/auth/logout", user);
//     dispatch(logoutSuccess());
//   } catch (err) {  }
// };