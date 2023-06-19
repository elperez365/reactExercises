import { useEffect, useState } from "react"

function GithubUser({username="Vasco"}){

    const [data, setData]=useState()


    useEffect(()=>{
        fetch (`https://api.github.com/users/${username}`)
        .then((res)=> res.json())
        .then(setData)
    },[username])



    return (
        <div> {data && <h1>{data.name}</h1> }   </div>
    )
}

export default GithubUser