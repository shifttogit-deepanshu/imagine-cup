import React from "react"
import GetContainers from "./GetContainers"
const Authenticated = ()=>{
    return (
        <div className="loginform"> 
        <div className="loginform__title">Log In Successful</div>
        <div>
            <GetContainers/>
        </div>
        <div className="login__message login__message--success"><div className="login__message__title login__message__title--top">Authentication Successful !</div><div>Press Start to start browsing the containers</div></div>
        </div>
    )
}

export default Authenticated