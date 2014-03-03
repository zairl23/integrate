$(document).ready(function(){
    //  jump   
    $('#logo').addClass("floating");
        
    $('#logo-active').click(function(){
       $(this).hide();
       $('#logo').show();
       $('#team').show();
       $('#team').addClass("slideLeft");
       $('#cover').show();
    });    
    
    $('#logo').click(function(){
        $(this).css('left', '0');
        $('#team').show();
        $('#team').addClass("slideLeft");
        $('#cover').show();
    });
    
    $('#cover').click(function() {
        //$('#logo').removeClass();
        $('#logo').hide();
        $('#team').hide();
        $('#description').html('');
        $('ul#a').show();
        $(this).hide();
        $('#description-1').html("<img id='products' src='http://meow-avatars.u.qiniudn.com/products-big.jpg' />");
    });
    
    $('#description-1').click(function(){
        // top the page
        $(document).scrollTop(0);        
        $(this).html('');
        $('#logo-active').show();
        //$('#logo').show();
        //$('#team').show();
        //$('#cover').show();
        $('#description').html('');
    });
    
    $('#description').click(function(){
      $(this).html("");
      $('ul#a').show();
    });
	

    // handle click for each image
    $('#a li.cai-0').click(function(){
      $('ul#a').hide();
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/peng.jpg-ui.jpg'  />");
    });
    $('#a li.cai-1').click(function(){
      $('ul#a').hide();
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/jie.jpg-ui.jpg'  />");
    });

    $('#a li.cai-2').click(function(){
      $('ul#a').hide();
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/ney.jpg-ui.jpg'  />");
    });

    $('#a li.cai-3').click(function(){
      $('ul#a').hide();
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/bei.jpg-ui.jpg'  />");
    });

    $('#a li.cai-4').click(function(){
      $('ul#a').hide();
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/qiang.jpg-ui.jpg'  />");
    });
});
