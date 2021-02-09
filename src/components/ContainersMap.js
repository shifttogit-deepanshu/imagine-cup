import React from "react"
import AzureMap from "./AzureMap"
import {connect} from "react-redux"

const Map = (props)=>{
    return (
        <div className="containers-maps">
        {Object.keys(props.container).length===0 && <AzureMap containers={props.containers}/>}
        {Object.keys(props.container).length!==0 && <AzureMap containers={[props.container.data[props.container.data.length-1]]}/>}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return ({
        container: state.containers,
        containers: state.users.containers
    })
}

export default connect(mapStateToProps)(Map)