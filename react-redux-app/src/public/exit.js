/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import $ from 'jquery';
import { url } from './url';
import { getCookie } from './getCookie';
import { Link, browserHistory } from 'react-router';
import { root } from './root';
const fwposturl = url();

const rootapp = root();

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
export const exit = () => {
    window.sessionStorage.clear();
    // $.ajax({
    //     url: fwposturl + '/logout',
    //     type: "post",
    //     dataType: "json",
    //     data: {},
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     crossDomain: true,
    //     success: function(res) {
    //         // window.location.href = rLogin();
    //         // res=JSON.parse(res)
    //         console.log("data" + res)

    //         if (res.err == 1111) {
    //             browserHistory.push(rootapp);
    //             // window.location.href='/'
    //             delCookie("data");
    //             window.sessionStorage.clear()
    //         }
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         console.log(textStatus + ' ' + errorThrown);
    //     }
    // });
    browserHistory.push(rootapp);
    window.sessionStorage.clear();
}