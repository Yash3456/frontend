import * as actiontypes from "../constants/productconstants.js";

const Getproductreducer = (state={products:[]},action) =>{
   switch(action.type){
     case actiontypes.GET_PRODIUCTS_SUCESS:
      return {products :action.payload}  

     case actiontypes.GET_PRODUCT_FAIL:
     return {error : action.payload}    

     default:
      return state
   }
}

export default Getproductreducer;