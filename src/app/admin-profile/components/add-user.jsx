"use client";

import { GetCookie } from "@/_helper";

export default function AddUser() {
  const addUser = async (e) => {
    e.preventDefault();
    const companyName = GetCookie("company");
    const user = {
      username: e.target.children[0].value,
      password: e.target.children[1].value,
      companyName: companyName,
    };
    try {
      const response = await fetch(`http://localhost:3001/api/add-user`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log("admin profile:", err);
    }
  };

  return (
    <form
      onSubmit={addUser}
      className="flex gap-5 flex-col w-96 align-center mx-auto mt-10"
    >
      <input
        type="text"
        placeholder="Username"
        className="p-5 rounded-md text-black"
        name="admin"
      />
      <input
        type="text"
        placeholder="Password"
        className="p-5 rounded-md text-black"
        name="password"
      />
      <button className="p-5 rounded-md bg-blue-300 text-black text-2xl">
        Submit
      </button>
    </form>
  );
}
