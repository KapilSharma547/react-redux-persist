import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import noteReducer from "./slices/notesSlice";
import todoReducer from "./slices/todoSlice";
const rootReducer = combineReducers({
  user: userReducer,
  notes: noteReducer,
  todo: todoReducer,
});

export default rootReducer;
