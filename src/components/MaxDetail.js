import React,{useEffect,useState} from "react"
import {connect} from "react-redux"
import TempMeterPos from "./TempMeterPos"
import TempMeterNeg from "./TempMeterNeg"

const MinDetail = (props)=>{
    const [maxTemp,setMaxTemp] = useState(100)
    useEffect(()=>{
        const tempArr = []
        props.containers.data.forEach((indata)=>{
            tempArr.push(indata.temp)
        },[props.containers.data])
        const max = Math.max(...tempArr)
        setMaxTemp(max)
        console.log(max)
    })
    
    return (
        <div className="detail">
                 <div className="idhead">{props.containers._id}</div>   
                 <div>{maxTemp>=0 && <TempMeterPos temp={maxTemp}/>}</div>
                 <div>{maxTemp<0 && <TempMeterNeg temp={maxTemp}/>}</div>  
                 <div className="temp-highlight"><span className="text-black">Max Reached: </span>{maxTemp} °C</div>  
        </div>
    )
}
const mapStateToProps = (state)=>{
    return ({
        containers: state.containers
    })
}
export default connect(mapStateToProps)(MinDetail)