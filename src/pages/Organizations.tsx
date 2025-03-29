import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrganization } from "../features/organizationsSlice";
import { v4 as uuidv4 } from "uuid";

const Organizations = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    lat: "",
    long: "",
    photo: "",
    user_id: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createOrganization({ ...form, id: uuidv4() }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="lat" placeholder="Latitude" onChange={handleChange} />
      <input name="long" placeholder="Longitude" onChange={handleChange} />
      <input name="photo" placeholder="Photo URL" onChange={handleChange} />
      <input name="user_id" placeholder="User ID" onChange={handleChange} />
      <button type="submit">Create Organization</button>
    </form>
  );
};

export default Organizations;