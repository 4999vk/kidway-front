import React from "react"; // 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/usersSlice";
import { RootState, AppDispatch } from "../app/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Вы вошли как: {currentUser.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
