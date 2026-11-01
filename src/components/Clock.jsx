import React, {useState, useEffect } from "react";



function Clock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const interval=setInterval(()=>{setTime(new Date());       
        },1000);
        return ()=> clearInterval(interval);
    },[]);
    return(
          <>
          <h1>Digital Clock</h1>
          <h2>{time.toLocaleTimeString("en-IN")}</h2>
          <p>{time.toLocaleDateString("en-IN",
                 {
                    weekday:"long",
                    day:"2-digit",
                    month:"long",
                    year:"numeric"
                 }
          )}
          
          </p>
          </>
    )
}
export default Clock;