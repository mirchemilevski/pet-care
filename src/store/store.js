import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userSlice/userSlice";
import todoReducer from "../reducers/todoSlice/todoSlice";
import formReducer from "../reducers/displayFormSlice/displayFormSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    toDos: todoReducer,
    formVisibility: formReducer,
  },
});
