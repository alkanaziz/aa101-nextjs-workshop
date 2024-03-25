"use client";

import { useState } from "react"

const ClientCounter = () => {

  const [count, setCount] = useState(0);

  const incrementFn = () => {
    setCount(count + 1);
  }

  const decrementFn = () => {
    setCount(count - 1);
  }

  // console.log("Who bin ich")

  return (
    <div>
      <h2>Nextjs Client Component</h2>
      <p>Count: {count}</p>
      <div className="flex gap-3 *:border *:rounded-full *:px-2">
        <button className="hover:bg-slate-400" onClick={incrementFn}>+</button>
        <button className="hover:bg-slate-400" onClick={decrementFn}>-</button>
      </div>
    </div>
  )
}
export default ClientCounter