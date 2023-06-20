import { useCallback, useState } from "react"

function UseCounter(initialValue=0){
const [counter,setCounter]=useState(initialValue);

const handleCounterIncrement=useCallback(
    function handleIncrement(){
    setCounter((c)=> c+1)
    },[])


const handleCounterDecrement=useCallback(
function handleDecrement(){
    setCounter((c)=>c-1)
},[])

const handleCounterReset=useCallback(
function handleReset(){
    setCounter(initialValue)
},[initialValue])

return {
    counter:counter,
    onIncrement:handleCounterIncrement,
    onDecrement:handleCounterDecrement,
    onReset:handleCounterReset,
}

}

export default UseCounter