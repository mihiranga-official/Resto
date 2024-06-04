import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingData: null,
};

export const bookingDataSlice = createSlice({
  name: "bookingDataManagement",
  initialState,
  reducers: {
    saveBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
  },
});

export const { saveBookingData } = bookingDataSlice.actions;
export const selectBookingData = (state) =>
  state.bookingDataManagement.bookingData;

export default bookingDataSlice.reducer;
