import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {setContainers} from "../store/actions/user"

const GetContainers = (props)=>{
    const handleGetContainers = ()=>{
    
    
    setInterval(() => {
        var data = JSON.stringify({"uid":props.uid});

        var config = {
    method: 'post',
    url: 'https://backic.azurewebsites.net/getcontainers',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    // console.log(response.data)
    const containers = response.data.containers;
    props.setContainers(containers)
    // console.log(containers)
    })
    .catch(function (error) {
    console.log(error);
    });
    }, 10000);
        
    }


    return (
        <div>
            <button className="button button--container" onClick={()=>handleGetContainers()}>Lets Go</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return ({
        uid:state.users.uid
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        setContainers : (containers)=>dispatch(setContainers(containers))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(GetContainers)