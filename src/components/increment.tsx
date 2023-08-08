"use client";

import { useState } from "react";

export async function Increment() {
  const [count, setCount] = useState(0);
  console.log('teste')


  return (
    <div style={{ display: "grid" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Add</button>
    </div>
  );
}
