import { useState } from "react";

export function Counter() {
  let [count, setCount] = useState(0);

  function increment() {
    count = count + 1;
    setCount(count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>
        Öka
      </button>
    </div>
  );
}