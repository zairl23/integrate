$(document).ready(function(){
    //  jump   
    $('#logo').addClass("floating");

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
        $(this).hide();
        $('#description-1').html("<img id='products' src='http://meow-avatars.u.qiniudn.com/products.png-ui.jpg' />");
    });
    
    $('#description-1').click(function(){
        $(this).html('');
        $('#logo').show();
       // $('#logo').addClass('floating');
        //$('#logo').css('display', 'block');
        $('#team').show();
        $('#cover').show();
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

    $('#description').click(function(){
      $(this).html("");
      $('ul#a').show();
    });
	
    //click logon again
    $('#nav').click(function(){
        alert('hello');
    });
});
