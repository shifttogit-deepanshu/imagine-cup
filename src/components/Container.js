import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {setLogs} from "../store/actions/container"
import TempMeterPos from "./TempMeterPos"
import TempMeterNeg from "./TempMeterNeg"
import moment from "moment"

const Container = (props)=>{
    const handleOpenContainer = ()=>{
        setInterval(()=>{
            var config = {
                method: 'get',
                url: 'https://backic.azurewebsites.net/getlogs?cid='+props.id,
                headers: {},
              };
              
              axios(config)
              .then(function (response) {
                  console.log(response.data[0])
                // console.log(response.data.data);
                props.setLogs(response.data[0])
              })
              .catch(function (error) {
                // console.log(error);
              }); 
        },10000)
                
        console.log("clicked",props.id)
    }

    return (
        <div className="container" onClick={()=>handleOpenContainer()}>
                 <div className="idhead">{props.id}</div>   
                 <div>{props.temp>=0 && <TempMeterPos temp={props.temp}/>}</div>
                 <div>{props.temp<0 && <TempMeterNeg temp={props.temp}/>}</div>  
                 <div className="temp-highlight">{props.temp} °C</div>   
                 <div className="lat-long">Latitude: <span className="lat-long--value">{props.lat}</span></div>   
                 <div className="lat-long">Longitude: <span className="lat-long--value">{props.long}</span></div> 
                 <div className="containertime">{moment(props.time).format("Do MMM YYYY , HH:mm:ss:SS")}</div>  
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        setLogs: (logs)=>dispatch(setLogs(logs))
    })
}
export default connect(undefined,mapDispatchToProps)(Container)