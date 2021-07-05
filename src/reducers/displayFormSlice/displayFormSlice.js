import { createSlice } from "@reduxjs/toolkit";

export const displayFormSlice = createSlice({
  name: "userForm",
  initialState: {
    userForm: false,
  },
  reducers: {
    showForm: (state, action) => {
      if (!state.userForm) {
        state.userForm = !action.payload;
      } else if (state.userForm === true) {
        state.userForm = false;
      }
    },
  },
});

export const { showForm } = displayFormSlice.actions;

export const toggleForm = (state) => state.userForm;

export default displayFormSlice.reducer;
