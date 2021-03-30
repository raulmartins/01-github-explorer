import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <strong>{counter}</strong>
      <button type="button" onClick={() => increment()}>
        Increment
      </button>
    </>
  );
}
