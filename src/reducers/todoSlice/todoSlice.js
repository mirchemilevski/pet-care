import { createSlice } from "@reduxjs/toolkit";
import petCare from "../../jsonData/petCare.json";

const todoSlice = createSlice({
  name: "todos",
  initialState: petCare,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        type: action.payload.type,
        img: action.payload.img,
        city: action.payload.city,
        country: action.payload.country,
        phone: action.payload.phone,
        person: action.payload.person,
      };

      state.push(newTodo);
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
