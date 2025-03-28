import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  password: string;
  first_name: string;
  second_name: string;
  tel: string;
}

interface UsersState {
  users: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  users: [],
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) state.currentUser = user;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
