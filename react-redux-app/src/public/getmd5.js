
import $ from 'jquery';
import md5 from 'js-md5';
export const getmd5=(gmid,token,timesign)=>{
    var obgj="";
        obgj="gmid"+gmid+"token"+token+"time"+timesign;
         var password= md5.hex(obgj);
    return  password
  }
