import React from "react"
import MaxDetail from "./MaxDetail"
import MinDetail from "./MinDetail"
import TempChart from "./TempChart"
const ContainerDetails = ()=>{
        return (<div className="container-details">
            <div className="details"><MaxDetail /><MinDetail /></div>
            <div className="graph"><TempChart /></div>
        </div>
        )

}

export default ContainerDetails