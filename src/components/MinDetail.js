import React,{useEffect,useState} from "react"
import {connect} from "react-redux"
import TempMeterPos from "./TempMeterPos"
import TempMeterNeg from "./TempMeterNeg"

const MaxDetail = (props)=>{
    const [minTemp,setMaxTemp] = useState(100)
    useEffect(()=>{
        const tempArr = []
        props.containers.data.forEach((indata)=>{
            tempArr.push(indata.temp)
        })
        const min = Math.min(...tempArr)
        setMaxTemp(min)
        console.log(min)
    },[props.containers.data])
    
    return (
        <div className="detail">
                 <div className="idhead">{props.containers._id}</div>   
                 <div>{minTemp>=0 && <TempMeterPos temp={minTemp}/>}</div>
                 <div>{minTemp<0 && <TempMeterNeg temp={minTemp}/>}</div>  
                 <div className="temp-highlight"><span className="text-black">Min Reached: </span>{minTemp} °C</div>  
        </div>
    )
}
const mapStateToProps = (state)=>{
    return ({
        containers: state.containers
    })
}
export default connect(mapStateToProps)(MaxDetail)