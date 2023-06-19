import { useState } from "react"


function ClickCounter(){
    const [count,setCount]=useState(0)
    

    let incrementCounterBy1 = () => {
        setCount((count) => count + 1)

    }


        return(
            <div>
                <h1>{count}</h1>
                <button onClick={incrementCounterBy1}>
                incrementa di 1
                </button>
            </div>
        )
}


export default ClickCounter