var slide1 = $('#slide1').offset().top;
var slide2 = $('#slide2').offset().top;
var slide3 = $('#slide3').offset().top;
var slide4 = $('#slide4').offset().top;
var slide5 = $('#slide4').offset().top;

$(document).scroll(function() {
if  ($(document).scrollTop() <= slide1 || $(document).scrollTop() == slide4)  {
    //alert("786 - It is in");
$('.navigation').css('background-color', '');
    }
else{ 
    $('.navigation').css('background-color', '#444');
    }
});
