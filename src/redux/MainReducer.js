import { createSlice } from "@reduxjs/toolkit";

export const filperSlice = createSlice({
  name: "fliper",
  initialState: {
    status: "normal",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
      console.log("state is: " , state.status)
    },
    resetState: (state, action) => {
      state = {

        status: "normal",
      };
    },
  },
});

export const {
  resetState,
  setStatus,
} = filperSlice.actions;

export default filperSlice.reducer;

