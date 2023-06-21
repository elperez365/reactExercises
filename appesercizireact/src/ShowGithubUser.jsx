import { Link, useParams } from "react-router-dom"

import useSwr from "./useSwr"

function ShowGithubUser(){
    const {username}= useParams()
    const {data,onFetch} = useSwr(username)

    function handleGetUserData(){
        onFetch()
    }
    
    return (
        <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt="" />
            <Link to="/">torna alla Home</Link>
            <button onClick={handleGetUserData}></button>
        </div>
    )
}

export default ShowGithubUser