import { Link, useParams } from "react-router-dom"

import useSwr from "./useSwr"

function ShowGithubUser(){
    const {username="elperez365"}= useParams()
    const {data} = useSwr(username)
    
    return (
        <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt="" />
            <Link to="/">torna alla Home</Link>
        </div>
    )
}

export default ShowGithubUser