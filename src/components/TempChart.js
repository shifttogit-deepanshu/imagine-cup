import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {connect} from "react-redux"
import moment from "moment"
// const data = [{Time: 100, Temperature: 400, pv: 2400, amt: 2400}, {Time: 200, Temperature: 500, pv: 2000, amt: 200},{Time: 250, Temperature: 400, pv: 2400, amt: 2400},{Time: 400, Temperature: 400, pv: 2400, amt: 2400}];

const TempChart =(props) =>{
    const data = props.containers
    console.log("the data",data)
    return (
      <div className="container-graph">
    <LineChart width={600} height={380} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temp" stroke="rgba(42, 187, 155, 1)" isAnimationActive={false} strokeWidth={3}/>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="_id" scale="time" allowDataOverflow={true} tickFormatter={(val)=>moment(val).format("D/M/YY H:m:s")}/>
    <YAxis />
    <Tooltip/>
  </LineChart>
  </div>
)};
const mapStateToProps = (state)=>({
    containers:state.containers.data
})
export default connect(mapStateToProps)(TempChart)