import React, { useEffect, useState } from "react";
export default function ShowCallback({ sendIncrement }) {
  console.log(sendIncrement);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(sendIncrement());
    // console.log("got a increment", {item});
  },[sendIncrement]);

  return item.map((data) => <div key={data}>{data}</div>);
}
