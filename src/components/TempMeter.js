import React from "react"
import { RadialBarChart, RadialBar,Tooltip } from 'recharts';
const TempMeter = (props)=>{
    
        
                                  
      return (
          
        
        <RadialBarChart 
        width={500} 
        height={250} 
        innerRadius="20%" 
        outerRadius="100%" 
        data={props.data} 
        startAngle={props.startAngle} 
        endAngle={props.endAngle}
      >
        <RadialBar background label={{formatter:val=>{if(props.type){return val + " °C"}else{return "-" + val + " °C"}},position:'insideStart',fill:"white"}} dataKey='Temperature' />
        <Tooltip formatter={(value,name)=>{if(props.type){return [value,"Temperature"]}else{return ["-"+value,"Temperature"]}}}/>
      </RadialBarChart>)
}


export default TempMeter