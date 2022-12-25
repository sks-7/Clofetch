
import {legacy_createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as CartReducer} from "./CartReducer/reducer"
import {reducer as SearchReducer} from "./SearchReducer/reducer"
import {reducer as Auth} from "./Auth/reducer"

const rootReducer = combineReducers({AppReducer,SearchReducer,Auth,CartReducer})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))

export {store}