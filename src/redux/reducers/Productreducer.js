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

export const getproductdetailsreducer = (state={product: {}},action)=>{
 
switch(action.type){
  case actiontypes.GET_PRODUCT_DETAILS_REQUEST:
   return {loading :true};

   case actiontypes.GET_PRODUCT_DETAILS_SUCESS :
      return {loading:true , product:action.payload};

    case actiontypes.GET_PRODUCT_DETAILS_FAIL:
     return {loading:false , error:action.payload};
     
   case actiontypes.GET_PRODUCT_DETIALS_RESET:
      return {product: {}};
    
     default:
      return state; 
}

}