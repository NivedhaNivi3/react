import React, { createContext, useState, useContext } from "react";

const userContext = createContext();

export default function Context() {
  const [obj] = useState({ email: "contextUser@gmail.com", name: "context" });

  return (
    <div>
      <h1>Its useContext Concept</h1>
      <userContext.Provider value={obj}>
        <Component1 />
      </userContext.Provider>
    </div>
  );
}

function Component1() {
  return <Component2 />;
}

function Component2() {
  return <Component3 />;
}
function Component3() {
  const detail = useContext(userContext);

  return (
    <div>
      <h2>Component 5</h2>
      <h5>{detail.email}</h5>
    </div>
  );
}
