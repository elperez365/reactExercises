import { useState } from "react";

function useForm (){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    let handleChange = (event) =>{
        if (event.target.name === "username"){
            setUsername(event.target.value);
        } else if (event.target.name === "password"){
            setPassword(event.target.value);
        }
    }


    return{
        username:username,
        password:password,
        handleChangeForm:handleChange,
    }
}

export default useForm