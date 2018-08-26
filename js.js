// $(function() {
//     $('.map').maphilight({
//         fillColor: '008800'
//     });
//     $('#hilightlink').mouseover(function(e) {
//         $('#square2').mouseover();
//     }).mouseout(function(e) {
//         $('#square2').mouseout();
//     }).click(function(e) { e.preventDefault(); });
//     $('#starlink').click(function(e) {
//         e.preventDefault();
//         var data = $('#star').data('maphilight') || {};
//         data.neverOn = !data.neverOn;
//         $('#star').data('maphilight', data);
//     });
//     $('#star,#starlink2').click(function(e) {
//         e.preventDefault();
//         var data = $('#star').mouseout().data('maphilight') || {};
//         data.alwaysOn = !data.alwaysOn;
//         $('#star').data('maphilight', data).trigger('alwaysOn.maphilight');
//     });
// });
// menu.onclick = function mFunction() {
//   var x = document.getElementById('myTopnav');
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
  // x.className === "topnav" ? (x.className += " responsive") : (x.className = "topnav");
// };
$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.nav');

		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            // menu.removeAttr('style');
                $(touch).show();
		        } else if {

            }
		    });
		});
