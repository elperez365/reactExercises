import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function ShowGithubUser(){
    const {username="elperez365"}= useParams()
    const [fetchData, setFetchData]= useState({})
    
    useEffect(()=> {fetch(`https://api.github.com/users/${username}`)
    .then((res)=>res.json()
    .then((json)=>setFetchData(json)
    ))},[username])

    console.log(fetchData)
    return (
        <div>
            <h1>{fetchData.login}</h1>
            <img src={fetchData.avatar_url} alt="" />
        </div>
    )
}

export default ShowGithubUser