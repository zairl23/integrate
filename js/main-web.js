$(document).ready(function(){ 
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
        $('#logo').hide();
        $('#team').hide();
        $('#description').html('');
        $(this).hide();
        //$('#app').show();
        // web-1
        $('#description-1').show();
        //$('#words-junery').show();
        //$('#words-wedding').show();
        //$('#words-school').show();
        //$('#words-life').show();
        //$('#words-gongyi').show();
        //$('#words-huwai').show();
        $('#words-list').show();
        //$('#words-school').addClass('floatingNey');
        //$('#description-1').addClass("pullDownNey");
        //$('#description-1').html("<img src='./images/1.jpg' />");
    });
    
    $('#description-1').click(function(){
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

    $('#words-list').click(function(){
        $(this).hide();
        $('#description-1').hide();
        $(document).scrollTop(0);
        $('#logo-active').show();
        $('#description').html('');
    });
	
    // handle click for each image
    $('#a li.cai-0').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/peng.jpg-ui.jpg'  />");
    });
    $('#a li.cai-1').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/jie.jpg-ui.jpg'  />");
    });

    $('#a li.cai-2').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/ney.jpg-ui.jpg'  />");
    });

    $('#a li.cai-3').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/bei.jpg-ui.jpg'  />");
    });

    $('#a li.cai-4').click(function(){
      $('#team').hide();
      $('#team').removeClass();
      $('#description').addClass("stretchRight");
      $('#description').html("<img src='http://meow-avatars.u.qiniudn.com/qiang.jpg-ui.jpg'  />");
    });

    $(window).scroll(function() {
			$('#words-huwai').each(function(){
			var imagePos = $(this).offset().top + 1027;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
                    $(this).addClass("slideRight");
                  
				} else {
                    $(this).removeClass("slideRight");                
                }
			});

			$('#words-gongyi').each(function(){
			var imagePos = $(this).offset().top + 1477;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideLeft");
				} else {
                    $(this).removeClass("slideLeft");                
                }
			});

			$('#words-art').each(function(){
			var imagePos = $(this).offset().top + 2224;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideLeft");
				} else {
                    $(this).removeClass("slideLeft");                
                }
			});		

			$('#words-junery').each(function(){
			var imagePos = $(this).offset().top + 2819;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("stretchRight");
				} else {
                    $(this).removeClass("stretchRight");                
                }
			});	

            $('#words-life').each(function(){
			var imagePos = $(this).offset().top + 3433;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("stretchLeft");
				} else {
                    $(this).removeClass("stretchLeft");                
                }
			});		

			$('#words-school').each(function(){
			var imagePos = $(this).offset().top + 4031;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("pullUp");
				} else {
                    $(this).removeClass("pullUp");                
                }
			});					
								

		});

客栈中心点：N36.55926， E100.5409
按照选定的大致边界点：江西沟乡和倒趟河的位置划定经纬度范围：
经度范围：（E100.272796～E100.95864）
纬度范围：（N36.399731 ～ N36.654098）
});
