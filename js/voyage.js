
$(document).ready(function(){
  $('.sidenav').sidenav();
  //$('.carousel').carousel();
  $('#slider').cycle({
    fx: 'scrollHorz',
timeout:    4000,
speed:      800,
next: '#promonav .next',
pager:	'#promoindex',
//height: 200,
pause: 1
});
 

});


        