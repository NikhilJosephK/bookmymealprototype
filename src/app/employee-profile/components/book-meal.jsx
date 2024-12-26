"use client";

import { DatePicker } from "@/components/date-picker/date-picker";
import { useCallback, useState } from "react";
import { GetCookie } from "@/_helper";

export default function BookMeal() {
  const [selected, setSelected] = useState([]);

  const getDate = useCallback((value) => {
    setSelected(value);
  }, []);

  const bookMeal = async (e) => {
    e.preventDefault();
    const cookieData = GetCookie("username");
    const userMeal = {
      days: selected,
      breakfast: e.target.children[0].children[0].children[1].checked,
      lunch: e.target.children[0].children[1].children[1].checked,
      dinner: e.target.children[0].children[2].children[1].checked,
      username: cookieData,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/api/book-meal`,
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userMeal),
        }
      );

      const data = await response.json();

      console.log("bookmeal page", data);
    } catch (err) {
      console.log("book meal page:", err);
    }
  };

  return (
    <section className="mt-20">
      <div className="grid place-content-center">
        <DatePicker getDate={getDate} />
        <form
          action=""
          onSubmit={bookMeal}
        >
          <div className="flex item-center gap-10 mt-10">
            <div className="flex gap-2">
              <label htmlFor="breakfast">Breakfast</label>
              <input
                type="checkbox"
                name="breakfast"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="lunch">Lunch</label>
              <input
                type="checkbox"
                name="lunch"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="Dinner">Dinner</label>
              <input
                type="checkbox"
                name="Dinner"
              />
            </div>
          </div>
          <div className="flex item-center gap-10 mt-10">
            <div className="flex gap-2">
              <label htmlFor="Veg">Veg</label>
              <input
                type="checkbox"
                name="Veg"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="Non-Veg">Non-Veg</label>
              <input
                type="checkbox"
                name="Non-Veg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-rose-300 text-white px-5 py-2 w-full flex justify-center font-bold mt-5 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
