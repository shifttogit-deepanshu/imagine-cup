import React from "react"
import LoginForm from "./components/LoginForm"
import Containers from "./components/Containers"
import {connect} from "react-redux"
import TempChart from "./components/TempChart"
import Map from "./components/ContainersMap"
import TempMeterPos from "./components/TempMeterPos"
import TempMeterNeg from "./components/TempMeterNeg.js"
import Header from "./components/Header"
import AppPort from "./components/AppPort"
import Authenticated from "./components/Authenticated"
import AllContainers from "./components/AllContainers"

const App = (props)=>{
 
  return (
    <div>
    <Header />
    <AppPort>
    {(props.uid===0 || props.uid===-1) && <LoginForm /> }
    {(props.uid!==0 && props.uid!==-1 && Object.keys(props.containers).length==0) &&<Authenticated />}
     
    
    {(props.uid!==0 && props.uid!==-1 && Object.keys(props.containers).length!==0) &&<AllContainers />}
    </AppPort>
      </div>        
  )
}

const mapStateToProps = (state)=>{
  return ({
      uid:state.users.uid,
      containers:state.users.containers
  })
}

export default connect(mapStateToProps)(App)