import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter ({init=0,incr=2,intervall=1000}){
    const [count,setCount]=useState(init)

   

    
    useEffect(()=>{
        setInterval(() => {
            setCount(count + incr)
        }, intervall)
        
         return () => {
            setInterval(()=>
            clearInterval(setCount))
            
         }
    },[])

   
    
    

    
        return(
            <CounterDisplay display={count}/>
        )
    
}


export default Counter