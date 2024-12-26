"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function DatePicker({ getDate }) {
  const [selected, setSelected] = useState();

  useEffect(() => {
    getDate(selected);
  }, [selected]);
  return (
    <DayPicker
      max={5}
      min={0}
      mode="multiple"
      selected={selected}
      onSelect={setSelected}
      disabled={{ dayOfWeek: [0, 6] }}
    />
  );
}
