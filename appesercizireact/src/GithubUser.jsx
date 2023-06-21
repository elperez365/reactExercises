
import { useParams } from "react-router-dom"
import useSwr from "./useSwr"

function GithubUser(){
    const {username="vasco"}=useParams
    const {data, error} = useSwr(username)
    
    return (
        <div>
            
            {error && <h1> there has been an error</h1> }
            {data && <h1>{data.name}</h1>}  
        </div>
    )
}

export default GithubUser