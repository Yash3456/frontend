import axios from "axios"; 
import * as actiontype from "../constants/cartconstants";

const URL = 'https://bakend-xi.vercel.app';

export const Addtocart= (id, quantity) => async (dispatch) => {
 try {
    
 const {data} =  await axios.get(`${URL}/product/${id}`);

 dispatch({type: actiontype.ADD_TO_CART,payload:{...data,quantity,id}});

 } catch (error) {
    
    dispatch({type: actiontype.ADD_TO_CART_ERROR,payload:error.message});

 }
}

export const Removefroomcart = (id) => (dispatch) =>{

dispatch({type:actiontype.REMOVE_FROM_CART,payload:id});

}