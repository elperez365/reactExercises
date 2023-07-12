
import { useState } from "react"
import { useMemo } from "react"


function FilteredList({people=[]}){
    const [personeMagg, setPersone]=useState(people)

    useMemo(()=> setPersone(people.filter((el)=> el.age >= 18)),[people]) 
    
    return (
        <div>
            <ul>
                {personeMagg.map((el)=> <li>{el.name}</li> )}
            </ul>
        </div>
    )
}

export default FilteredList