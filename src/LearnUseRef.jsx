import React,{useRef, useState}from "react";


export default function Ref(){
    const [userColor,setUserColor]=useState('');
    const reference=useRef('');
   const applyColor=(value)=>{
    const choosedColor=userColor;

console.log('value',value,choosedColor);
reference.current.style.color=choosedColor;
console.log('value',reference);
    }
    return(
        <div>
            <h1 ref={reference}>Its UserRef Component</h1>
            <input onChange={(e)=>{setUserColor(e.target.value)}} placeholder="give a valid color name"  />
            <button onClick={applyColor} >Apply</button>
        </div>
    )
}