"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = new useRouter();
  const loginUser = async (e) => {
    e.preventDefault();
    const userLoginData = {
      username: e.target.children[0].value,
      password: e.target.children[1].value,
    };

    try {
      const response = await fetch(`http://localhost:3001/api/employee-login`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginData),
      });
      const data = await response.json();

      if (!data) {
        console.log("user exists");
      } else {
        document.cookie = `username=${data.username}`;
        router.push("/employee-profile/");
      }
    } catch (err) {
      console.log("employee login: ", err);
    }
  };

  return (
    <form
      onSubmit={loginUser}
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
