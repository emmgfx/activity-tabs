"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <span className="text-5xl font-semibold tabular-nums text-(--color-heading)">
        {count}
      </span>
      <span className="text-xs uppercase tracking-widest text-(--color-body)">
        count
      </span>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-1 px-5 py-2 rounded-lg bg-(--color-accent) text-white text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Increment
      </button>
    </div>
  );
};
