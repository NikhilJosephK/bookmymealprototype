"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [userExist, setUserExist] = useState(false);
  const router = new useRouter();

  const register = async (e) => {
    e.preventDefault();
    const registrationDetails = {
      company: e.target.children[0].value || "",
      admin: e.target.children[1].value || "",
      password: e.target.children[2].value || "",
    };
    try {
      const response = await fetch(`http://localhost:3001/api/registration`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationDetails),
      });
      const data = await response.json();
      console.log(data);
      const { error } = data;
      if (error) {
        setUserExist(true);
      } else {
        setUserExist(false);
        document.cookie = `company=${registrationDetails.company}`;
        router.push("/admin-profile/");
      }
    } catch (err) {
      console.log("login page: ", err);
    }
  };
  return (
    <section>
      <h1 className="text-4xl text-center mt-20">Register Here!</h1>
      {userExist && (
        <p className="text-white text-xl text-center">User Exist</p>
      )}
      <form
        onSubmit={register}
        className="flex gap-5 flex-col w-96 align-center mx-auto mt-10"
      >
        <input
          type="text"
          placeholder="Company Name"
          className="p-5 rounded-md text-black"
          name="company"
        />
        <input
          type="text"
          placeholder="Admin Username"
          className="p-5 rounded-md text-black"
          name="admin"
        />
        <input
          type="text"
          placeholder="Admin Password"
          className="p-5 rounded-md text-black"
          name="password"
        />
        <button className="p-5 rounded-md bg-blue-300 text-black text-2xl">
          Register
        </button>
      </form>
    </section>
  );
}
