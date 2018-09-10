import axios from 'axios'
import {
    getmd5
} from './getmd5';
import $ from 'jquery';
// import {Encrypt} from './aes';
import Mock from 'mockjs'
import {
    getipconfig
} from '../getipconfig';
import qs from 'qs';
const getip = getipconfig();
const resulturl = getip.clientip;
const testUrl = getip.serverip;

axios.defaults.withCredentials = true;
let getajax = {
    ajaxFun(type, urlhouzu, cmd, data, callback) {
        let datas = ""
        let postdata = ""
        //postdata = JSON.stringify(datas)
        if (type == "get") {
            axios.get(testUrl + urlhouzu, {
                    params: data
                }, {})
                .then(function(response) {
                    console.log("fanhui:", response.data)
                    callback(response.data)
                })
                .catch(function(error) {
                    console.log(error);
                });
        } else if (type == "post") {
            //let datavale = JSON.parse(sessionStorage.getItem("userInfo"))
            let datavale = []
            //(sessionStorage.getItem("userInfo"))
            let sign = "123"
            let datas = ""
            if (urlhouzu == "loginPost") {
                datas = {
                    "gmid": "",
                    "v": "1",
                    "token": "",
                    "sign": "",
                    "timesign": "",
                }
            } else {
                let timesign = (new Date()).valueOf();
                data.gmid = datavale.gmid;
                datas = {
                    "gmid": 81,
                    "v": "1",
                    "token": "aaa",
                    "sign": sign,
                    "timesign": timesign.toString(),
                    "data": data,
                    "cmd": cmd,
                }
            }
            axios.post(testUrl + urlhouzu, datas)
                .then(function(e) {
                    callback(e.data)

                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    ajaxUpload(type, urlhouzu, cmd, data, formData, callback) {
        let datas = {
            "gmid": 81,
            "timesign": "222",
            "token": "11",
            "cmd": cmd,
            "sign": "11",
            "v": 1,
            "data": data
        }
        formData.append("data", JSON.stringify(datas));
        $.ajax({
            url: testUrl + urlhouzu,
            method: type,
            contentType: false,
            processData: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: formData,
            success: (e) => {
                let data = JSON.parse(e)
                callback(data)
            }
        })

    },
    timeFunc(value) {
        let time = new Date(parseInt(value) * 1000);

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let wek = time.getDay();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        let t = y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mi) + ':' + add0(s)
        //let t= y + '-' + add0(m) + '-' + add0(d) +"-"+wek
        //console.log("转换成功之后的时间:",t)
        return t;
    },
    timeYearFunc(value) {
        let time = new Date(parseInt(value) * 1000);
        let time1 = new Date();

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let ynow = time1.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let wek = time.getDay();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        // let t= y + '-' + add0(m) + '-' + add0(d) +' '+add0(h)+':'+add0(mi)+':'+add0(s)
        //let t= y + '-' + add0(m) + '-' + add0(d) +"-"+wek
        //console.log("转换成功之后的时间:",t)
        if (y < ynow) {
            return y;
        } else {
            return '';
        }

    },
    timeMonthFunc(value) {
        let time = new Date(parseInt(value) * 1000);

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        // let t= y + '-' + add0(m) + '-' + add0(d) +' '+add0(h)+':'+add0(mi)+':'+add0(s)
        let t = add0(m) + '/' + add0(d)
        //console.log("转换成功之后的时间:",t)
        return t;
    },
    timeDayFunc(value) {
        let time = new Date(parseInt(value) * 1000);

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        // let t= y + '-' + add0(m) + '-' + add0(d) +' '+add0(h)+':'+add0(mi)+':'+add0(s)
        let t = add0(y) + '/' + add0(m) + '/' + add0(d)
        //console.log("转换成功之后的时间:",t)
        return t;
    },
    timeHoursFunc(value) {
        let time = new Date(parseInt(value) * 1000);

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        // let t= y + '-' + add0(m) + '-' + add0(d) +' '+add0(h)+':'+add0(mi)+':'+add0(s)
        let t = add0(h) + ':' + add0(mi)
        //console.log("转换成功之后的时间:",t)
        return t;
    },
    timeFuncMonth() {
        let time = new Date();

        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        // let t= y + '-' + add0(m) + '-' + add0(d) +' '+add0(h)+':'+add0(mi)+':'+add0(s)
        let t = y + '年' + add0(m) + "月"
        //console.log("转换成功之后的时间:",t)
        return t;
    }
};
const Ajax = getajax.ajaxFun;

export const getRolelist = (tag, sucRoleList) => {
    let data = {}

    // 请求角色
    Ajax('post', 'front/query', tag, data, sucRoleList)
}
export {
    getajax
}

// Mock.mock('http://192.168.1.104:9888/front/query',{
//     'name|3':'fei',//这个定义数据的模板形式下面会介绍
//     'age|20-30':25,
// })

let obj=["货币","铜钱","鲜花"]
Mock.mock('http://192.168.1.104:9888/front/query',function difrentdata(options){
   
    let data=JSON.parse(options.body);
    if(options.body==null){
        // 首次登录
        return  options
    }
    let tempdata="";
    let cmdtemp=data.cmd;
    console.log("options",options,data,cmdtemp)
     switch(cmdtemp){
         case "conf_games": tempdata = gamesdata();break;
         case "conf_users": tempdata = userdata();break;
         default :;
         }
         console.log(tempdata)
    return tempdata


})
let gamecode=["cy","cn","lw","bq","xlm"]
let gamename=["尘缘","超能","龙纹","兵器少女","新龙门"]
function gamesdata(){
    return Mock.mock({
        "ret": 1,
        "v": 1,
        "data|1-20": [{
            "gid|1-50": 1,
            "code|+1": gamecode,
            "name|+1": gamename
        }
    ]
    })
}
let state=[1,0]
let rolenamedata=["角色1","角色2","角色3","角色4"]
let usernamedata=["陈巧","王昆","王刚","胡涛","余晓清"]
let nicknamedata=["chenqiao","wangkun","wanggang","hutao","yuxiaoqing"]
function userdata(){
    return Mock.mock({
        "ret": 1,
        "v": 1,
        "data|1-20": [{   
	"uid|1-20": 6,
	"username|+1": usernamedata,
	"nickname|+1": nicknamedata,
	"usergroupid|1-1000": 1,
	"email|1": "chenqiao@npcfuture.com",
	"mobile": "13548151988",
	"secpass|1-4": "fgtyruy",
	"userstate|1": state,
	"roleid|1-10": 4,
	"rolename|1": rolenamedata,
	"partner": null,
	"usernewtime": '@now()'
        }
    ]
    })
}
