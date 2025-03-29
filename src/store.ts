import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice"; // Убедись, что путь верный

export const store = configureStore({
  reducer: {
    users: usersReducer, // Используем правильное имя
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
