import { useRef, useState } from "react";

function Counter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (
    <>
      <p>Count: {count}</p>
      <p>Render sayı: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </>
  );
}
export default Counter;