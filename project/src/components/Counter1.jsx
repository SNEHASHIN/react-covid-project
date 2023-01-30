import React,{useState} from "react";



const Counter1=()=>{
    const [count,setCount]=useState([0])

    const increment = () => {
    //   setCount([...count,count[count.length-1] + 1])
         setCount([...count, count[count.length - 1] + 1]);
    };
    const decrement = () => {
      setCount([...count.slice(0, count.length -1)]);
    //   setCount([...count.slice(0, count.length - 1)]);
    };
    const reset = () => {
      setCount(0);
    };
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            {/* <button onClick={decrement} disabled={count===0} >decrement</button> */}
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter1