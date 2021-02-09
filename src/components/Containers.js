import React from "react"
import {connect} from "react-redux"
import Container from "./Container"

const Containers = (props)=>{
    return (
        <div className="containers">
            {props.containers.map(container=><Container id={container._id} temp={container.temp} lat={container.lat} long={container.long} time={container.timeStamp} key={container._id} />)}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return ({containers : state.users.containers})
} 
export default connect(mapStateToProps)(Containers)