import { useEffect, useRef } from "react"

function Cardetails({initialValue={modello:"Panda", anno:2007, colore:"bianco"}}){

    const formRef=useRef()

    
    useEffect(()=>{
        formRef.current[0].value = initialValue.modello
        formRef.current[1].value = initialValue.anno
        formRef.current[2].value = initialValue.colore

    },[initialValue])

    return(
        <div>
            <form ref={formRef}>
                <label htmlFor="modello">Modello</label>
                <input name="modello" type="text" />
                <label htmlFor="anno">Anno</label>
                <input name="anno" type="text" />
                <label htmlFor="colore">Colore</label>
                <input name="colore" type="text" />
            </form>
        </div>
    )
}

export default Cardetails