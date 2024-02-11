import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStorageToDos = localStorage.getItem("toDos");

const toDos = createSlice({
  name: "toDosReducer",
  initialState: localStorageToDos ? JSON.parse(localStorageToDos) : [],
  reducers: {
    add: (state, action) => {
      const newToDoObj = { text: action.payload, id: Date.now() };
      localStorage.setItem("toDos", JSON.stringify([newToDoObj, ...state]));
      state.unshift(newToDoObj);
    },
    remove: (state, action) => {
      const cleaned = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(cleaned));
      return cleaned;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
