import { useState } from "react"
import { Link } from "react-router-dom"


function GithubUserList (){
    const [nameG,SetnameG] = useState()

    let handleNameG = (event)=>{
        SetnameG(event.target.value)
        
    }
    return(
        <div>
            <form action="">
                <label htmlFor="nameG">Inserisci il nome Github</label>
                <input value={nameG} onChange={handleNameG} name="nameG" type="text" />
            </form>
            <Link style={{background:"yellow"}} to={`/users/${nameG}`}>CERCA</Link>
        </div>
    )
}

export default GithubUserList