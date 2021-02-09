import {SET_UID} from "../actions/user"
import {SET_CONTAINERS} from "../actions/user"
const initiaState = {uid:0,containers:[]}


const userReducer = (state=initiaState,action)=>{
    switch(action.type){
    case SET_UID: 
    return {...state,uid:action.uid,containers:[]}
    case SET_CONTAINERS:
        return {...state,containers:action.containers}
    default:
            return state
    }
}

export default userReducer