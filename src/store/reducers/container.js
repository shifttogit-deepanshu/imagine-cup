import {SET_LOGS} from "../actions/container"


const initiaState = {}

export default (state=initiaState,action)=>{
    switch(action.type){
        case SET_LOGS:
            return action.logs
    default:
            return state
    }
}