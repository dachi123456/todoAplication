import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo.slice";


const rootReducer = combineReducers({
  todo: todoReducer,
 
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;