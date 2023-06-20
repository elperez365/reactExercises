import { Link } from "react-router-dom"

function Nav(){
    return(
        <div>
            <Link to="/counter">Counter</Link>||||||
            <Link to="/list">Lista</Link>|||||
            <Link to="/users/elperez365">Il mio github</Link>||||||
        </div>
    )
}

export default Nav