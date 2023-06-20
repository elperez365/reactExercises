import { useState } from "react"


function GithubUserList (){
    const [list,Setlist] = useState(["user1"])

    let handleSubmitForm = (event) => {
        event.preventDefault()
        console.log (event)
        Setlist([...list,event.target[0].value])
    }

    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" />
                <input type="submit" />
            </form>
            <ul>
                {list.map((el)=> <li>{el}</li> )}
            </ul>
        </div>
    )
}

export default GithubUserList