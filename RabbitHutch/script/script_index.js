$(document).ready(function(){
  $('button#btn_rot13').on('click',function(){
    // ROT13
    $('div#result').html(ROT13_function($('input#inputb_rot13').val()));
  });
});

/////////////////////////
//                     //
//    複雜code擺下面    //
//                     //
/////////////////////////
const ROT13_function=(incoming)=>{
  let basket={'origin':incoming,'result':''};
  for(let singleChar of basket.origin){
    let checkASCII=(singleChar)=>{
      const temp_value=singleChar.charCodeAt();
      const isCap=temp_value<=90?true:false;
      if(isCap){
        return temp_value<=77?String.fromCharCode(temp_value+13):String.fromCharCode(temp_value-13);
      }else{
        return temp_value<=109?String.fromCharCode(temp_value+13):String.fromCharCode(temp_value-13);
      }
    }
    basket.result+=checkASCII(singleChar);
  }
  return basket.result;
}
