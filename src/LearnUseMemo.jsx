import React from "react";
import { useState, useMemo, useEffect } from "react";

export default function MemoComp() {
  const [count, setCount] = useState(0);
//   const usememo = useMemo(() => <Child />, [count]);
  return (
    <div>
      <h1>UseMemo Comp</h1>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <div>
        <Child />
      </div>
    </div>
  );
}

function Child() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    return setInitial(initial + 1);
  });
  return <div>{initial}</div>;
}
