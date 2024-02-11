import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const localStorageToDos = localStorage.getItem("toDos");

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo(), deleteToDo());

const reducer = (
  state = localStorageToDos ? JSON.parse(localStorageToDos) : [],
  action
) => {
  switch (action.type) {
    case addToDo.type:
      const newToDoObj = { text: action.payload, id: Date.now() };
      localStorage.setItem("toDos", JSON.stringify([newToDoObj, ...state]));
      return [newToDoObj, ...state];
    case deleteToDo.type:
      const cleaned = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(cleaned));
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = { addToDo, deleteToDo };

export default store;
