import React, { useState} from "react";


const Counter=()=>{
const [count,setCount]=useState(0);


const handleincrement=()=>{
    setCount(count+1);
}

const handledecrement = () => {
  setCount(count - 1);
};

const handlereset = () => {
  setCount(0);
};

    return (
      <>
       <p>{count}</p>
       <button onClick={handleincrement}>increment</button>
       <button onClick={handledecrement} disabled={count===0}>decrement</button>
       <button onClick={handlereset}>reset</button>
      </>
    );
}

export default Counter
