$("document").ready(function () {
  $(".navbar").sticky();
  //    $('.cutout').click(function(){
  //     app.notification.init("Update", "1.2.5 is available");
  //    })
  $(".background-loader-overlay").delay(2000).fadeOut(1000);
  $(".circular-capability > .lni").mouseenter(function () {
    $(this).css("font-size", "larger");
  });
  $(".circular-capability > .lni").mouseleave(function () {
    $(this).css("font-size", "inherit");
  });

  function turnWhite() {
    $(".navbar-brand").css({ "background-color": "#fff" });
  }
  function turnGreen() {
    $(".navbar-brand").css({ "background-color": "#2ac93fab" });
  }

  jQuery(window).scroll(function () {
    if ($(window).scrollTop() > 550 && $(window).scrollTop() < 850) {
      turnWhite();
    } else {
      turnGreen();
    }
  });

if(screen.width < 767){
  jQuery(window).scroll(function () {
    if ($(window).scrollTop() > 550 && $(window).scrollTop() < 1200) {
      turnWhite();
    } else {
      turnGreen();
    }
  });
}
  AOS.init();
});
