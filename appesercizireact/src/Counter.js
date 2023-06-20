import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import { Link } from "react-router-dom";

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
            <div>
                <CounterDisplay display={count}/>
                <Link to="/">torna alla home</Link>
            </div>
            
        )
    
}


export default Counter