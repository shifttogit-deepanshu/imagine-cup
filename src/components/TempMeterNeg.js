import React from "react"
import TempMeter from "./TempMeter"

const TempMeterNeg = (props)=>{
    const data = [
        {
          "name": "",
          "Temperature": 100,
          "fill": "white"
        },
        {
          "name": "Temperature",
          "Temperature": Math.abs(props.temp),
          "fill": "rgba(42, 187, 155, 1)"
        }
      ]
    return (
        <TempMeter startAngle={0} endAngle={-360} data={data} type={0}/>
    )
}

export default TempMeterNeg