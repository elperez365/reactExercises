import useSWR from "swr"

const fetcher = (url)=>fetch(url).then((res)=>res.json());

function useSwr(username="peppecaliri"){
    const {data,error}=useSWR(`https://api.github.com/users/${username}`,fetcher)

    return {
        data,
        error
    }
}



export default useSwr