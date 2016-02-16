// JavaScript Document
$(document).ready(function(){
	$('#show-map').click(function(){
		$('#map').slideToggle(1000);
		});
	});

//Плавное перемещение
/*
$(function(){
$('.scr').bind('click',function(){
var speed = 1000; // Скорость движения
if($(this).attr('href')=='#down'){
$('html').animate({scrollTop:$(document).height()}, speed,'swing');
} else if($(this).attr('href')=='#top'){
$('html').animate({scrollTop:0}, speed,'swing');
} else {
$('html').animate({scrollTop: $(this.hash).offset().top}, speed,'swing');
}
return false;
});

*/
