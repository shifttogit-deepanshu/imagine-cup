import React from "react"
import Containers from "./Containers"
import Map from "./ContainersMap"
import {connect} from "react-redux"
import ContainerDetails from "./ContainerDetails"

const AllContainers = (props)=>{
    
        return (
            <div className="allcontainers">
                {Object.keys(props.containers).length===0 && <div className="allcontainertab"><Containers /></div>}
                {Object.keys(props.containers).length!==0 && <div className="allcontainertab"><ContainerDetails/></div>}
                <div className="maptab"><Map /></div>
            </div>
        ) 

    
}
const mapStateToProps = (state)=>{
    return ({
        containers:state.containers
    })
}

export default connect(mapStateToProps)(AllContainers)