import useSWR, { mutate } from "swr"

const fetcher = (url)=>fetch(url).then((res)=>res.json());

function useSwr(username){
    const {data,error}=useSWR(`https://api.github.com/users/${username}`,fetcher)

    function fetchGithubUser(){
        mutate()
    }


    return {
        data:data?data:null,
        error,
        onFetch:fetchGithubUser,
    }
}



export default useSwr