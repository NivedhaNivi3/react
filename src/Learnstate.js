import React, { useState } from "react";
function Check() {
  const [name, setName] = useState("Hi name"); //single value
  const [current, setCurrent] = useState();
  const [bio] = useState({
    name: "Aruvi",
    age: 3,
    year: 2030,
  });
  const [isbool, setIsbool] = useState(false);

  const changeState = () => {
    setName("setName Works");
  };

  const [isEnable, setisEnable] = useState(false);

  const message = "isbool true only message showed!";
  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={changeState}>Change</button>
      {name}
      <div>showing object state {bio.name}</div>
      <label>Two way binding</label>
      <input
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
      />
      {current}
      <h2>condionally appliying style</h2>
      <button
        className={isbool ? "first_class" : "second_class"}
        onClick={() => {
          setIsbool(!isbool);
        }}
      >
        Change class
      </button>
      <button style={{ color: isbool ? "red" : "green" }}
        onclick={() => {
          setIsbool(!isbool);
        }}   > change style  </button>
      <h2>disables and hide and show</h2>
      <button  disabled={isEnable}
        onClick={() => {
          setisEnable(!isEnable);
        }} > disable btn   </button>
      {isbool ? message : ""}
    
    </div>
  );
}
export default Check;
