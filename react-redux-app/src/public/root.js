/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import $ from 'jquery';
export const root = () => {
    let swurl = ""
    $.ajax({
        method: 'get',
        url: '/root.json',
        async: false,
        success: function(data) {
            let datas = data.myapp;
            swurl = datas;
            console.log("zhi", swurl)
        }.bind(this),
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ' ' + errorThrown);
        }
    });
    return swurl
}