import React, {useState} from "react"

const Counter=()=>{
    const [count,setCount]=useState([0]);

    const handleincrement=()=>{
        setCount([...count, count[count.length -1] + 1])
    }
    

    const handledecrement = () => {
      setCount([...count.slice(0, count.length -1)])
    };


    const handlereset = () => {
      setCount(0);
    };
    return (
      <>
        <h1>{count}</h1>

        <button onClick={handleincrement}>increment</button>
        <button onClick={handledecrement} disabled={count==0}>decrement</button>
        <button onClick={handlereset}>reset</button>
      </>
    );
}

export default Counter