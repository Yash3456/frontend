import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import Getproductreducer, { getproductdetailsreducer } from './reducers/Productreducer';
import {cartReducer} from './reducers/Cartreducer';

const reducer = combineReducers({
    getproducts : Getproductreducer,
    getproductDetails : getproductdetailsreducer,
    cart : cartReducer
})

const middleware = [thunk];

const Store = createStore (
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;