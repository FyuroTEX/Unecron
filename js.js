$(function() {
  var $backTop = $(".back-top");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $backTop.fadeIn();
    } else {
      $backTop.fadeOut();
    }
  });
  $backTop.on("click", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      900
    );
  });
  $(".map").maphilight({
    fillColor: "008800"
  });
  $(".clients")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Наші Клієнти</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
  $(".services")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Послуги</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
  $(".consultations")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Консультації</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
  $(".inform")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Інформація</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
  $(".order")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Замовити</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
  $(".projekt")
    .mouseover(function(e) {
      $("div.fildname").html("<span class='mapName'>Проекти</span>");
    })
    .mouseout(function(e) {
      $(".fildname").html('<br style="line-height: 11px;">');
    });
});
