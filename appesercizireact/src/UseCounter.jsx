import { useState } from "react"

function UseCounter(initialValue=0){
const [counter,setCounter]=useState(initialValue);

function handleCounterIncrement(){
    setCounter((c)=> c+1)
}

function handleCounterDecrement(){
    setCounter((c)=>c-1)
}

function handleCounterReset(){
    setCounter(initialValue)
}

return {
    counter:counter,
    onIncrement:handleCounterIncrement,
    onDecrement:handleCounterDecrement,
    onReset:handleCounterReset,
}

}

export default UseCounter