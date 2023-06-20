import { useEffect, useState } from "react"

function useGithubUser(username){
    const [data, setData]=useState()


    useEffect(()=>{
        fetch (`https://api.github.com/users/${username}`)
        .then((res)=> res.json())
        .then(setData)
    },[username])

    return {
        data
    }
}

export default useGithubUser