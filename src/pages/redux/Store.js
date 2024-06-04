import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import BookingDataSlice from "./BookingDataSlice";

const middleware = (getDefaultMiddleware) => {
  return [...getDefaultMiddleware(), thunk];
};

export default configureStore({
  reducer: {
    bookingDataManagement: BookingDataSlice,
  },
  middleware,
});
