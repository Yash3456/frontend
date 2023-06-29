import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import Getproductreducer from './reducers/Productreducer';

const reducer = combineReducers({
    getproducts : Getproductreducer
})

const middleware = [thunk];

const Store = createStore (
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;