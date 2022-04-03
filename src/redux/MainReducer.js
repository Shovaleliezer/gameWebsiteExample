import { createSlice } from "@reduxjs/toolkit";

export const filperSlice = createSlice({
  name: "fliper",
  initialState: {
    status: "normal",
    address: null,
    reward: "energy",
    type: "rare"
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
      console.log("state is: " , action)
    },
    setAddress: (state, action) => {
        state.address = action.payload;
      },
    setReward: (state, action) => {
      state.reward = action.payload.reward;
      state.type = action.payload.type;
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
  setAddress,
  setReward
} = filperSlice.actions;

export default filperSlice.reducer;

