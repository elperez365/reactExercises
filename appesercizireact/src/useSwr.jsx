import useSWR from "swr"

const fetcher = (url)=>fetch(url).then((res)=>res.json());

function useSwr(username){
    const {data,error}=useSWR(`https://api.github.com/users/${username}`,fetcher)

    return {
        data:data?data:null,
        error
    }
}



export default useSwr