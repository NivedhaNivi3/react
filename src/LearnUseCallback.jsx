import React, { useCallback, useState } from "react";
import ShowCallback from './ShowCallback'
export default function Back() {
  const [value, setValue] = useState();

  const increment = useCallback(() => {
    return [value,parseInt(value)+1];
  });

  const decrement = () => {
    return [value,parseInt(value)-1];
  };

  return (
    <div>
        <h2>UseCall back  comp</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <div>Give value is :{value}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <ShowCallback sendIncrement={increment}/>
    </div>
  );
}
