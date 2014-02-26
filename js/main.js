$(document).ready(function(){
    var domain = 'http://meow-avatars.u.qiniudn.com/';
    var domainLocal = 'images/';
    var size  = '-ui.jpg';
    var sizeLocal = 'images/8meow.png';
    var login = ['登录.jpg', '登录成功.jpg'];
    var signup = ['8meow.png'];
    var home = ['首页(主题).jpg', '首页(后台上传).jpg'];
    var relationship = ['关系页.jpg'];
    var homeUser = ['个人页-基本信息.jpg', '个人页-设置.jpg'];
    var video = ['拍摄.jpg', '拍摄-完成上传.jpg'];
    var changePasswd = ['设置-修改密码.jpg'];
    var forgetPasswd = ['忘记密码.jpg', '忘记密码-修改密码.jpg', '忘记密码-验证码.jpg'];
    var changePhonenumber = ['设置-修改手机号.jpg', '设置-修改手机号-验证码.jpg'];
    var qa = ['设置-Q&A.jpg'];
    var invite = ['设置-好友邀请.jpg'];
    var account = ['设置-帐号安全.jpg'];
    var uis = ['login', 'signup', 'home', 'relationship', 'homeUser', 'video', 'changePasswd','forgetPasswd', 'changePhonenumber', 'qa', 'invite', 'account'];

    // convert path to img's src    
    function pathToUrl(path) {
        var imgs = "";
        for(var i=0; i < path.length; i++) {
            var imgs = imgs + "<img title=" + path[i] + " src=" + domain + path[i] + size + " />";         
        }
        return imgs;
    }

    // generate html for showing image(s)
    function show(path) {
        $('#img').html(pathToUrl(path));
    }

    // handle click for each uis
    for (var m=0; m<uis.length;m++) {
        //$('#' + uis[m]).bind(click(function(){
        //    show(eval(uis[m]));
        //});
        $('#' + uis[m]).bind("click", {"el":uis[m]},function(event){
            show(eval(event.data.el));
        });
    }
});
