import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { products: [], quantity: 0, total: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: {initialStateValue},
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    emptyCart: (state) => {
      state.quantity = 0;
      state.products = []
      state.total = 0
    },
  },
});

export const { addProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
