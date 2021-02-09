import React from 'react'
import {AzureMap, AzureMapHtmlMarker, AzureMapsProvider} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'



const DefaultMap = (props) => {
    // console.log(Number(props.containers[0].lat))
    const option= {
        authOptions: {
            authType: AuthenticationType.subscriptionKey,
            subscriptionKey: 'aMmhMWx0awFcGqoMl-qxVgFTAr834xX_nbwDf3twTEY'
        },
        style: 'grayscale_dark',
        center: [Number(props.containers[0].lat), Number(props.containers[0].long)],
        zoom: 1,
        language: 'en-US',
        
    }
    return (
        
        <AzureMapsProvider>
            <AzureMap options={option} className="azure-maps">
            {props.containers.map((container)=><AzureMapHtmlMarker key={container._id} options={{position:[Number(container.long), Number(container.lat)],color:"rgba(42, 187, 155, 1)",text:"<p style='color:rgba(42, 187, 155, 1)'>" + container._id + "<p>",secondaryColor:"white"}}/>)}
            </AzureMap>
            
        </AzureMapsProvider>


)
    }
export default DefaultMap
                