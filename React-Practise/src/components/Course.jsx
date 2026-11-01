import { useEffect, useState } from "react";

function Course(){
    const[Count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count:${Count}`;
    },[Count]);
    const[Message,setMessage]=useState();
    useEffect(()=>{
       document.title=Message?"Message is Visible " : "Message is Hidden ";
    },[Message])
    return(
        <>
        <h5>This is course Page</h5>
        <h5>{Count}</h5>
        <button onClick={()=>{setCount(Count+1)}}>Increment</button>
         <button onClick={()=>{if(Count>0){setCount(Count-1)}}}>Decrement</button>
          <button onClick={()=>{setCount(0)}}>Reset</button>
<button onClick={()=>{setMessage(! Message)}}>Show message</button>
    {Message && <h3>Hello ! Message is visible.</h3>}
        </>
    )
}
export default Course;