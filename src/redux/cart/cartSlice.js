import { createSlice } from "@reduxjs/toolkit";

/**
 * createSlice : fungsi untuk membuat slice dari reduc store yang berisi reducer dan action
 * yang merupakan bagian dari state
 */

const cartSlice = createSlice({
  name: "cart", // nama slice
  // initialState : ini awal state
  initialState: {
    // logika dibawah ini berfungsi typeof window !== "undefined" : untuk memastikan jika localstorage berjalan
    // di sisi browser
    data:
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("cart"))) ||
      [],
  },
  //   reducer & action untuk memperbaharui nilai state data yang dikirim dari action.payload
  reducers: {
    addToCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions; // export action biar bisa dipakai

export default cartSlice.reducer;
