$(document).ready(function(){
    // get height
    $('#logo-active').show().addClass('pulse');
    $('#logo-active').vhAlign();
    var bili = 240/700;
    var bilib = 800/1440;
    var height = $(window).height();
    var widthTotal = $(window).width();
    var width = (widthTotal) / 6;
    var heights = Math.ceil(width / bili);
    var widthb = widthTotal;
    var heightb = widthTotal * bilib;
    var topoffsetb = height - heightb; 
    var topoffsets = height -heights;
    
    for (var i =0; i < 6; i++) {
        if (i == 0) {
            $('#a > li.hui-' + 0).css({'position':'absolute', 'left': width * i, 'top':topoffsets});
        } else {
            $('#a > li.hui-' + i).css({'position':'absolute', 'left': width * i, 'top':topoffsets});
            $('#a > li.cai-' + i).css({'position':'absolute', 'left': width * i, 'top':topoffsets});
        }
        
    }     
    $('#a > li > img').css({'min-width': width, 'height':'auto', 'max-width': width});
    //  jump   
    //$('#logo').addClass("pullDown"); 
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
        $('#description-1').addClass("pullDownNey").show();
        $('#description-1').css('overflow-y', 'visible');
    });
    
    $('#description-1').click(function(){
        // top the page
        $(this).removeClass('pullDownNey');   
        $(this).hide();
        $(document).scrollTop(0);
        $('#logo-active').show();
        $('#logo-active').vhAlign();
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
    $('#a li.cai-1').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      //$('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/wang/pengb.png-ui.jpg'  />");
      $('#description').css('top', topoffsetb); 
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
      $('#description').addClass("stretchRightNey");
    });

    $('#a li.cai-2').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
     // $('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/wang/jieb.png-ui.jpg'  />");
      $('#description').css('top', topoffsetb); 
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
      $('#description').addClass("stretchRightNey");
        
    });

    $('#a li.cai-3').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      //$('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/wang/neyb.png-ui.jpg'  />");
      $('#description').css({'top':topoffsetb}); 
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
      $('#description').addClass("stretchRightNey");
    });

    $('#a li.cai-4').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      //$('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/wang/beib.png-ui.jpg'  />");
      $('#description').css('top', topoffsetb);       
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
      $('#description').addClass("stretchRightNey");
      
    });

    $('#a li.cai-5').click(function(){
      $('#logo').hide();
      $('#team').hide();
      $('#team').removeClass();
      //$('#description').addClass("stretchRightNey");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/wang/qiangb.png-ui.jpg'  />");
      $('#description').css('top', topoffsetb); 
      $('#description > img.imgb').css({'min-width':widthb, 'height':heightb, 'max-width':widthb});
      $('#description').addClass("stretchRightNey");
    });

});
