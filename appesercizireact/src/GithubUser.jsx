
import useGithubUser from "./useGithubUser"

function GithubUser({username="Vasco"}){

    const {data, error, loading} = useGithubUser(username)
    
    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1> there has been an error</h1> }
            {data && <h1>{data.name}</h1>}  
        </div>
    )
}

export default GithubUser