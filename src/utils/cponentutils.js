export const addsubsills = (text) =>{
if(text.length > 30){
    return text.substring(0,50)+"...";
}else{
    return text;
}

}