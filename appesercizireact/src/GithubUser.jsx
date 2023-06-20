
import useGithubUser from "./useGithubUser"

function GithubUser({username="Vasco"}){

    const data = useGithubUser(username)

    return (
        <div> {<h1>{data.data.name}</h1> }   </div>
    )
}

export default GithubUser