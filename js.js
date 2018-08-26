$(function() {
    $('.map').maphilight({
        fillColor: '008800'
    });
    $('#hilightlink').mouseover(function(e) {
        $('#square2').mouseover();
    }).mouseout(function(e) {
        $('#square2').mouseout();
    }).click(function(e) { e.preventDefault(); });
    $('#starlink').click(function(e) {
        e.preventDefault();
        var data = $('#star').data('maphilight') || {};
        data.neverOn = !data.neverOn;
        $('#star').data('maphilight', data);
    });
    $('#star,#starlink2').click(function(e) {
        e.preventDefault();
        var data = $('#star').mouseout().data('maphilight') || {};
        data.alwaysOn = !data.alwaysOn;
        $('#star').data('maphilight', data).trigger('alwaysOn.maphilight');
    });
});
