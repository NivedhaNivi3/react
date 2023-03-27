import React, { useState, useEffect } from "react";

export default function CheckEffect() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Initial MSG");
  const [eff, setEff] = useState("useEffect Not called");
  useEffect(() => {
    console.log("cont", count);
    console.log("msg", msg);
    console.log("useEffect called");
    if (msg === "Message Updated") {
      setEff("useEffect Called");
    }
  }, [msg]); //function will excute based on the dependencies([msg]) ,dependencies accepted props,states also
  return (
    <div>
      <h1>Its useEffect Compt</h1>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count
        </button>
        {count}
        <br />
        <button
          onClick={() => {
            setMsg("Message Updated");
          }}
        >
          Update msg
        </button>
        {msg}
        <h3>{eff}</h3>
      </div>
    </div>
  );
}
