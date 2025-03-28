import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import organizationsReducer from "../features/organizationsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    organizations: organizationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

