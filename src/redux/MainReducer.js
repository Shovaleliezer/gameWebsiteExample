import { createSlice } from "@reduxjs/toolkit";

export const filperSlice = createSlice({
  name: "fliper",
  initialState: {
    status: "normal",
    address: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
      console.log("state is: " , action)
    },
    setAddress: (state, action) => {
        state.address = action.payload;
      },
    resetState: (state, action) => {
      state = {
        address: null,
        status: "normal",
      };
    },
  },
});

export const {
  resetState,
  setStatus,
  setAddress
} = filperSlice.actions;

export default filperSlice.reducer;

