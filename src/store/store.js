import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
