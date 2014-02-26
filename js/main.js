$(document).ready(function(){
    var domain = 'http://meow-avatars.u.qiniudn.com/';
    var domainLocal = 'images/';
    var size  = '-ui.jpg';
    var sizeLocal = 'images/8meow.png';
    var login = [
            {"view": "登录.jpg", "desc":"登录"},
            {"view": "登录成功.jpg", "desc":"登录成功"},        
        ];
    var signup = [{"view": "注册.jpg", "desc":"描述显示在这里"}];
    var home = [
            {"view": "首页(主题).jpg", "desc":"描述显示在这里"},
            {"view": "首页(后台上传).jpg", "desc":"允许双线程上传"}
        ];
    var relationship = [{"view": "关系页.jpg", "desc":"长按关注用户信息区域弹出取消关注提示，长按粉丝用户信息区域弹出关注提示"}];
    var homeUser = [
            {"view":"个人页-基本信息.jpg", "desc":"点击头像弹出提示选择相册或相机"},
            {"view":"个人页-设置.jpg", "desc":"点击版本信息跳转苹果商店页面"}
        ];
    var video = [
            {"view":"拍摄.jpg", "desc":"为了能全屏看到拍摄画面，把屏幕的白色区域(上下左右)做成半透明的效果"},
            {"view":"拍摄-完成上传.jpg", "desc":"点击缩略图播放预览8meow,未填写标题和未选择主题，上传图标为灰色，表示无法上传"}
        ];
    var changePasswd = [{"view":"设置-修改密码.jpg", "desc":"点击发送验证码按钮，发送成功，按钮切换为验证码输入框"}];
    var forgetPasswd = [
            {"view":"忘记密码.jpg", "desc":"描述显示在这里"},
            {"view":"忘记密码-验证码.jpg", "desc":"some"},
            {"view":"忘记密码-修改密码.jpg", "desc":"some"}
            
        ];
    var changePhonenumber = [
            {"view":"设置-修改手机号.jpg","desc":"描述显示在这里"},
            {"view":"设置-修改手机号-验证码.jpg", "desc":"描述显示在这里"}
        ];
    var qa = [{"view":"设置-Q&A.jpg","desc":"用邮件的形式发送问题到官方邮箱，下方列出常见问题列表，从服务端获取"}];
    var invite = [{"view":"设置-好友邀请.jpg","desc":"如果好友号码在电话薄，直接进入电话簿选择"}];
    var account = [{"view":"设置-帐号安全.jpg","desc":"描述显示在这里"}];
    var uis = ['login', 'signup', 'home', 'relationship', 'homeUser', 'video', 'changePasswd','forgetPasswd', 'changePhonenumber', 'qa', 'invite', 'account'];

    // convert path to img's src    
    function pathToUrl(path) {
        var imgs = "";
        for(var i=0; i < path.length; i++) {
            var imgs = imgs + "<img title=" + path[i].desc + " src=" + domain + path[i].view + size + " />";         
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
