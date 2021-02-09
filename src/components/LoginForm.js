import React,{useState} from "react"
import axios from "axios"
import { connect } from 'react-redux'
import {setuid} from "../store/actions/user"
import img from "../images/avtarweb.png"


const LoginForm = (props)=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        var data = JSON.stringify({"username":username,"password":password});

        var config = {
        method: 'post',
        url: 'https://backic.azurewebsites.net/authuser',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        // console.log(response.data);
        props.setuid(response.data.uid)
        })
        .catch(function (error) {
        // console.log(error);
        props.setuid(-1)
        });

      }

    return (
        <div className="loginform"> 
            <div className="img"><img src={img} /></div>     
            <div className="loginform__title">LOGIN</div>  
            <input type="text" name="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <input type="text" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <input className="button" type="submit" value="Submit" onClick={(e)=>handleSubmit(e)}/>
            {props.uid===0 && <div className="login__message"><div className="login__message__title login__message__title--top">Please Authenticate !</div><div><span className="login__message__title">Note: </span>For Demo purpose, Login with username:<span className="login__message__title ">user@123</span> and password: <span className="login__message__title">user@123</span></div></div>}
            {props.uid===-1 && <div className="login__message login__message--err"><div className="login__message__title login__message__title--top">Authentication failed :(</div><div><span className="login__message__title">Note: </span>For Demo purpose, Login with username:<span className="login__message__title ">user@123</span> and password: <span className="login__message__title">user@123</span></div></div>}
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        setuid: (uid)=>dispatch(setuid(uid))
    })
}

const mapStateToProps = (state)=>{
    return ({
        uid:state.users.uid
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)