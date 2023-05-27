import React from "react";
import Counter from "./Counter";

class CounterDisplay   extends Counter{

 
render(){
    return(
        <h1>{this.state.count}</h1>
    )
}    
        
     
    
}

export default CounterDisplay