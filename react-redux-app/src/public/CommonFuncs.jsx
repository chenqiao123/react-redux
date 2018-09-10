import $ from 'jquery';

/**
 * 公共函数方法等
 */

// export const getmd5=(gmid,token,timesign)=>{
//     var obgj="";
//         obgj="gmid"+gmid+"token"+token+"time"+timesign;
//          var password= md5.hex(obgj);
//     return  password
//   }

//判断是否为，号分隔
export const CheckStr = (str) => {
    var SpecialCharacters = "@/'\"#$%&^*:;,";
    var i = 0;
    for (i = 0; i < SpecialCharacters.length - 1; i++) {
        if (str.IndexOf(SpecialCharacters.charIndex(i)) !== -1) {
            if (SpecialCharacters.charIndex(i) === ",") {
                return true;
            } else {
                return false;
            }

        }
    }
    return false;
}

//是否输入正确的url
export const IsURL = (str_url) => {
    var strRegex = '^((https|http|ftp|rtsp|mms)?://)' +
        '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@
        +
        '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
        +
        '|' // 允许IP和DOMAIN（域名）
        +
        '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
        +
        '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
        +
        '[a-z]{2,6})' // first level domain- .com or .museum
        +
        '(:[0-9]{1,4})?' // 端口- :80
        +
        '((/?)|' // a slash isn't required if there is no file name
        +
        '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
    //var re = new RegExp(strRegex);
     var re = /^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
   
    //re.test()
    if (re.test(str_url)) {
        return (true);
    } else {
        return (false);
    }
}


//时间戳转换
export const getNowFormatDate = (str) => { //str为传入的时间戳
    var date = new Date(str);

    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var srthours = date.getHours();
    var strminute = date.getMinutes();
    var strsec = date.getSeconds()
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (srthours >= 0 && srthours <= 9) {
        srthours = "0" + srthours;
    }
    if (strminute >= 0 && strminute <= 9) {
        strminute = "0" + strminute;
    }
    if (strsec >= 0 && strsec <= 9) {
        strsec = "0" + strsec;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate + " " + srthours + seperator2 + strminute +
        seperator2 + strsec;
    return currentdate;
}


//解析SchemaKey, SchemaName
export const parseSchemaToMap = (schemaKeys, schemaNames) => { //str为传入的时间戳
    var schemaMap = new Map();


    for (var i = schemaKeys.length - 1; i >= 0; i--) {
        var key = schemaKeys[i];
        var name = schemaNames[i];
        let array = key.split(".");


        for (var j = 0; j < array.length; j++) {
            console.log(array[j])
        }
    }

    //NOT FINISHED
    return schemaMap;
}
// 动态构造多级树结构dom
export const setSlide = (menus) => {
    var name = "";
    for (var i = 0; i < menus.length; i++) {
        menus[i].label = menus[i].name;
        menus[i].value = menus[i].id;
        (function(data) {
            console.log('遍历')
            var m = arguments[0];
            for (var j = 0; j < m.length; j++) {
                console.log(m[i].name);
                m[i].label = m[i].name
                if (m[j].children != null && m[j].children.length > 0) {
                    arguments.callee(m[j].children); //递归匿名方法
                }
            }
        })(menus[i].children);
    }
}
export const zidianfangyi = (name) => {
    var obj = {
        url: "",
        name: ""
    }
    switch (name) {
        case "Home": //首页
            obj.url = "Home";
            obj.name = "首页";
            break;
        case "SubsystemManagement": //子系统管理
            obj.url = "SubsystemManagement";
            obj.name = "子系统管理";
            break;
        case "UserManagement": //用户管理界面
            obj.url = "UserManagement";
            obj.name = "用户管理";
            break;
        case "ChannelManagement": //渠道管理
            obj.url = "ChannelManagement";
            obj.name = "渠道管理";
            break;
        case "LogManagement": //日志管理
            obj.url = "LogManagement";
            obj.name = "日志管理";
            break;
        case "GameManagement": //游戏管理
            obj.url = "GameManagement";
            obj.name = "游戏管理";
            break;
        case "CooperationManagement": //合作平台管理
            obj.url = "CooperationManagement";
            obj.name = "合作平台管理";
            break;
        case "Information": //消息管理
            obj.url = "Information";
            obj.name = "消息";
            break;


    }
    return obj;

}
// 动态设置classname
export const setItemClassName=(statetepm)=> {
  let tempclassname=""
  switch(statetepm){
    case 0:tempclassname="hasok";break;
    case 1:tempclassname="hasforbid";break;
    default:tempclassname="";break;
  }
  return tempclassname;
}
//在显示文本中设置点，并翻译状态
export const setItemDot=(item)=>{
    let str=[];
    switch(item){
        case 0:str=[".","正常"];break;
        case 1:str=[".","禁用"];break;
        default :str=[item];break;
    }
    return str
}
// 设置分割线
export const setItemSegmentation=(item)=>{
      let str=item==''?[]:["|",item];
   

    return str
}

Array.prototype.indexOf = function(val) {
for (var i = 0; i < this.length; i++) {
if (this[i] == val) return i;
}
return -1;
};
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};

Array.prototype.removeByValue = function(val) {
    for(var i=0; i<this.length; i++) {
      if(this[i] == val) {
        this.splice(i, 1);
        break;
      }
    }
  }
export const GetUserALLnum=(data)=>{
    let alldata=0
    for(var i=0;i<data.length;i++){
        alldata=alldata+data[i].memnum
    }
    return alldata
}
export const SetUserListData=(dataALL)=>{
    

//转为为可以使用过的数据
    let arry=[];
    let Adminarry=[];
   
   let dataall={"Admin":"","group":""}
      // console.log("wk的数据222",dataALL)
    for(let i=0;i<dataALL.length;i++){
        // console.log("wk的数据",dataALL[i])
      let objall={"data":"","optiondata":"",
    "iconurl":"",
    "checkboxcheack": false,
    "id": "1001"}
        let arry2=[];
        let arry3=[];
        let arry4=[];
        let obj1={"title":dataALL[i].username,"data":[dataALL[i].rolename]}
       let obj2={"title":"状态","data":[dataALL[i].userstate]}
        let obj3={"id": dataALL[i].uid,"data": ["详情", "禁用"]}
        arry4.push(obj1)
        arry4.push(obj2)
        arry2.push(arry4)
        arry3.push(obj3)
        objall.data=arry2;
        objall.checkboxcheack=dataALL[i].checkboxcheack
        objall.optiondata=arry3;
        objall.id=dataALL[i].uid;
        if (dataALL[i].isAdmin) {
            Adminarry.push(objall)
        }else{
            arry.push(objall)
        }
               
    }
      dataall.Admin=Adminarry;
     dataall.group=arry
     return dataall

}
export const getsubSystem=(data,nextSubsystem,nextrole)=> {
  let obj={"data":"","init":"","initname":""};
  let subsystemdata=[],initsubsystem="",initsubsystemname="";
  let allobj={"subsystem":"","role":""};
  for(let j=0;j<data.item.length;j++){
      if(nextSubsystem==""){
      initsubsystem=data.item[0].id;
      initsubsystemname=data.item[0].name;
      allobj.role=getroledata(data.item[0],"")
      }else{
        initsubsystem=nextSubsystem;
        initsubsystemname=data.item[j].name;
        if (data.item[j].id==nextSubsystem) {
           allobj.role=getroledata(data.item[j],nextrole)
        }
      }
      let objsub={"name":data.item[j].name,"id":data.item[j].id}
       subsystemdata.push(objsub)
      
    }
    obj.data=subsystemdata;
    obj.init=initsubsystem;
    obj.initname=initsubsystemname;
    allobj.subsystem=obj;
    return allobj
}
export const getroledata=(data,nextrole)=> {
  let obj={"data":"","init":"","initname":""}
  let roledata=[],initrole=[],initrolename=[];
   for(let k=0;k<data.item.length;k++){

    let objrole={"name":"","id":""}
         if (nextrole=="") {
            console.log("zhishi",data.item[0].id)
          initrole=[data.item[0].id]
          initrolename=[data.item[0].name]
         }else{
          initrole=nextrole;
          console.log("$.inArry(data.item[k].id,nextrole)",$.inArray(data.item[k].id,nextrole))
          if ($.inArray(data.item[k].id,nextrole)>-1) {
          initrolename.push(data.item[k].name)
          }
         }
           objrole={"name":data.item[k].name,"id":data.item[k].id}
         roledata.push(objrole);
       
       }
       obj.data=roledata;
       obj.init=initrole;
       obj.initname=initrolename;
  return  obj
}
export const getdataallkey=(resdata)=> {
 var allkey=[];
 for (var i in resdata.data ) {
  if (i!=="removeByValue"&&i!=="remove") {
    var parentkey=resdata.data[i].id.toString()
    allkey.push(parentkey);
    for(var j=0;j< resdata.data[i].children.length;j++){
      var checkedKey=resdata.data[i].children[j].id.toString();
      var checkedKeys=parentkey+"-"+checkedKey
      allkey.push(checkedKeys);
    }
  }else{
    continue;
  }
}

return allkey;
}
export const getdataallkeyparent=(resdata)=> {
  var allkey=[];
   for (var i in resdata.data ) {
  if (i!=="removeByValue"&&i!=="remove") {
    var parentkey=resdata.data[i].id.toString()
    allkey.push(parentkey);
     }else{
    continue;
  }
}
return allkey;
}
export const getCheckgamelist=(data)=>{
//    let  options = [
//   { label: 'Apple', value: 'Apple' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange' },
// ];
 // let data =[{"gid":"14","code":"cy","name":"尘缘"},
 // {"gid":"10","code":"bingqi","name":"兵器少女"},
 // {"gid":"2","code":"chaoneng","name":"超能大陆"},
 // {"gid":"3","code":"ddz","name":"斗地主"},
 // {"gid":"15","code":"xlmkz","name":"新龙门客栈"},
 // {"gid":"16","code":"csj","name":"长生诀"},
 // {"gid":"17","code":"xdny","name":"心动女友"},
 // {"gid":"18","code":"bingqi_tw","name":"兵器繁体"},
 // {"gid":"7","code":"chaoneng_tw","name":"超能港台"},
 // {"gid":"8","code":"chaoneng_en","name":"超能英文[已下线]"},
 // {"gid":"9","code":"chaoneng_tai","name":"超能泰国"},
 // {"gid":"12","code":"chaoneng_zd","name":"超能国际(卓动)"},
 // {"gid":"13","code":"chaoneng_rd","name":"超能睿德"},
 // {"gid":"1","code":"lwsg","name":"龙纹大陆"},{"gid":"6","code":"lwsg_tx","name":"龙纹腾讯"},{"gid":"11","code":"lwsg_bt","name":"龙纹BT版"},{"gid":"4","code":"lwsg_tw","name":"龙纹繁体[已下线]"},{"gid":"5","code":"lwsg_jp","name":"龙纹日本[已下线]"}]
 let tempdata=[]
 for(let i=0;i<data.length;i++){
    let obj={label:data[i].name , value: data[i].gid}
    tempdata.push(obj)
 }
 return tempdata
}
// 复选框通过id找name
export const searchIdToName=(data,idArray)=>{
    let namearry=[];
  for(let i=0;i<data.length;i++){
     if ($.inArray(data[i].value,idArray)>-1) {
        namearry.push(data[i])
     }
  }
  return namearry
}
// 复选框通过name找id
export const searchNameToId=(data,NameArray)=>{
  let idarry=[];
  for(let i=0;i<data.length;i++){
     if ($.inArray(data[i].labe,NameArray)>-1) {
        idarry.push(data[i])
     }
  }
  return idarry
}
