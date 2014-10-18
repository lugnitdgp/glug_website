// JavaScript Document
$(document).ready(function() {
						   
   $('.sticky_el').waypoint('sticky');
	
	$('#map').mouseover(function() {
								 $('#hidden').fadeIn();
								 });
		$('#map').mouseout(function() {
								 $('#hidden').fadeOut();
								 });
		$('.social_logo').mouseover(function() {
											 if($(this).attr('src') == 'img/icon-4.png')
											 $(this).attr('src','img/i4.png');
											 
											 if($(this).attr('src') == 'img/icon-3.png')
											 $(this).attr('src','img/i3.png');
											 
											 if($(this).attr('src') == 'img/icon-2.png')
											 $(this).attr('src','img/i2.png');
											 
											 if($(this).attr('src') == 'img/icon-1.png')
											 $(this).attr('src','img/i1.png');
											 });
		$('.social_logo').mouseout(function() {
											 if($(this).attr('src') == 'img/i4.png')
											 $(this).attr('src','img/icon-4.png');
											 
											 if($(this).attr('src') == 'img/i3.png')
											 $(this).attr('src','img/icon-3.png');
											 
											 if($(this).attr('src') == 'img/i2.png')
											 $(this).attr('src','img/icon-2.png');
											 
											 if($(this).attr('src') == 'img/i1.png')
											 $(this).attr('src','img/icon-1.png');
											 });
		$('.social_logo').click(function() {
											 if($(this).attr('src') == 'img/i4.png')
											 $(this).attr('src','img/icon-4.png');
											 
											 if($(this).attr('src') == 'img/i3.png')
											 $(this).attr('src','img/icon-3.png');
											 
											 if($(this).attr('src') == 'img/i2.png')
											 $(this).attr('src','img/icon-2.png');
											 
											 if($(this).attr('src') == 'img/i1.png')
											 $(this).attr('src','img/icon-1.png');
											 });
		
		$(".auto_scroll").mCustomScrollbar();
												
						   });
