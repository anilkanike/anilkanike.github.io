(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/pen2-372.png' : 'images/pen2-248.png') : 'images/pen2-124.png');
$('.js-2').attr('src', (dpi>1) ? 'images/4-960.jpg' : 'images/4-480.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/03-720.jpg' : 'images/03-480.jpg') : 'images/03-240.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/10-720.jpg' : 'images/10-480.jpg') : 'images/10-240.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/01-1440.jpg' : 'images/01-960.jpg') : 'images/01-480.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/13-1440.jpg' : 'images/13-960.jpg') : 'images/13-480.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/09-720.jpg' : 'images/09-480.jpg') : 'images/09-240.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/05-711.jpg' : 'images/05-474.jpg') : 'images/05-237.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/02-960.jpg' : 'images/02-480.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/phone-1104.jpg' : 'images/phone-736.jpg') : 'images/phone-368.jpg');
$('.js-11').attr('src', (dpi>1) ? ((dpi>2) ? 'images/mail-189.jpg' : 'images/mail-126.jpg') : 'images/mail-63.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});