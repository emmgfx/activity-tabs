"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-4">
      <div>Counter: {count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-full bg-purple-500 px-5 py-2 font-semibold text-white"
      >
        Increment
      </button>
    </div>
  );
};
