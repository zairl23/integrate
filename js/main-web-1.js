$(document).ready(function(){
    //  jump   
    $('#logo').addClass("floating");
    $('#logo-active').addClass('pulse');  
    $('#logo-active').click(function(){
       $(this).hide();
       $('#logo').show();
       $('#team').show();
       $('#team').addClass("slideLeftNey");
       $('#cover').show();
    });    
    
    $('#logo').click(function(){
        $(this).css('left', '0');
        $('#team').show();
        $('#team').addClass("slideLeftNey");
        $('#cover').show();
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
        $(this).removeClass('stretchRight');
        $('#team').show();
        $('#team').addClass('slideLeftNey');
      
    });
	
    // handle click for each image
    $('#a li.cai-0').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/peng.jpg-ui.jpg' />");
    });
    $('#a li.cai-1').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/jie.jpg-ui.jpg'  />");
    });

    $('#a li.cai-2').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/ney.jpg-ui.jpg'  />");
    });

    $('#a li.cai-3').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/bei.jpg-ui.jpg'  />");
    });

    $('#a li.cai-4').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img class='imgb' src='http://meow-avatars.u.qiniudn.com/qiang.jpg-ui.jpg'  />");
    });

});
