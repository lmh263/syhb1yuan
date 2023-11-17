var BaseUrl =  "http://110.42.7.35:1700";
var ResourceUrl = 'http://syzy.womai.la/tthaibei/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        //alert('请先登录');
        window.location.href = '/index.html';
    }
}


        