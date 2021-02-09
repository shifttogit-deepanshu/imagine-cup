import { createStore,combineReducers} from 'redux'
import userReducer from "./reducers/user"
import containerReducer from "./reducers/container"

const store = createStore(combineReducers({
    users:userReducer,
    containers:containerReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store