$(document).ready(function(){
    // get height
    var bili = 0.2675;
    var bilib = 0.625;
    var img = 132;// 108+24
    var height = $(document).height() - 16;
    //alert(height);
    var widthTotal = $(document).width() - 16;
    //var width = bili * height;
    
    //var widthb = height / bilib;
    var width = (widthTotal-img) / 5;
    var height = width / bili;
    var widthb = (widthTotal-img);
    var heightb = widthb * bilib;
    //alert(height)
    for (var i =0; i < 5; i++) {
        $('#a > li.hui-' + i).css({'position':'absolute', 'left': width * i, 'top':0});
        $('#a > li.cai-' + i).css({'position':'absolute', 'left': width * i, 'top':0});
    }
    //$('#a > li > img').css({'min-height': height, 'width':width, 'max-height': height});        
    $('#a > li > img').css({'min-width': width, 'height':height, 'max-width': width});
   // $('#description').children().css({'min-height':height, 'max-height':height, 'max-width':'auto'});
    //$('#logo > img').css({'min-width': width, 'max-height':'auto', 'max-width': width});
    //$('#team').css('left', width);
    //$('#logo').css('width', width);
    //  jump   
    $('#logo').addClass("pullDown");
    $('#logo-active').addClass('pulse');  
    $('#logo-active').click(function(){
       $(this).hide();
       $('#logo').show();
       $('#team').show();
       $('#team').addClass("slideLeftNey");
      // $('#cover').show();
    });    
    
    $('#logo').click(function(){
       // $(this).css('left', '0');
        $(this).hide();
        $('#team').hide();
        //$('#team').addClass("slideLeftNey");
        //$('#cover').show();
        $('#description-1').show();
        $('#description-1').addClass("pullDownNey");
    });
    
    $('#cover').click(function() {
        //$('#logo').removeClass();
        $('#logo').hide();
        $('#team').hide();
        $('#description').html('');
        $(this).hide();
        $('#description-1').show();
        $('#description-1').addClass("pullDownNey");
        //$('#description-1').html("<img id='products' src='http://meow-avatars.u.qiniudn.com/products-big.jpg' />");
        
    });
    
    $('#description-1').click(function(){
        // top the page
        $(this).removeClass('pullDownNey');   
        $(this).hide();
        $(document).scrollTop(0);
        $('#logo-active').show();
        $('#description').html('');
    });
    
    $('#description').click(function(){
        $(this).html("");
        $(this).removeClass('stretchRightNey');
        $('#team').show();
        $('#logo').show();
        $('#team').addClass('slideLeftNey');
      
    });
	
    // handle click for each image
    $('#a li.cai-0').click(function(){
      $('#logo').hide();
      
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/peng.jpg-ui.jpg' />");
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
    });
    $('#a li.cai-1').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/jie.jpg-ui.jpg'  />");
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
    });

    $('#a li.cai-2').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/ney.jpg-ui.jpg'  />");
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
    });

    $('#a li.cai-3').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/bei.jpg-ui.jpg'  />");
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
    });

    $('#a li.cai-4').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/qiang.jpg-ui.jpg'  />");
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
    });

});
