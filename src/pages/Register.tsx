import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/usersSlice";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "", first_name: "", second_name: "", tel: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ ...form, id: uuidv4() }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="first_name" placeholder="First Name" onChange={handleChange} />
      <input name="second_name" placeholder="Second Name" onChange={handleChange} />
      <input name="tel" placeholder="Phone" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
