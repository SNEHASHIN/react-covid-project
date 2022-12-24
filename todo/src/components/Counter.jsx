import React from "react";
import { useState } from "react";
// import "./counter.css";

const Counter=()=>{

    const[count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

  return (
    <div className="container">
     <p>{count}</p>
     <button onClick={increment}>+</button>
     <button>-</button>
    </div>
  );
};
export default Counter;
