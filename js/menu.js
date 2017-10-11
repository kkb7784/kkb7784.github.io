$(document).ready(function() {
  var btn_bar = $('.btn-menubar, .menubar');
  var container = $('.menubar-container');
  var menu = $('.main-menu');
  var act = $('.menubar-act');
  var btn = $('.btn-menubar');
  var last = $('.main-menu > li:last-child li:last-child a');

  btn_bar.click(function() {
    container.toggleClass('menubar-act');
    menu.toggleClass('menu-act');
    if (container.hasClass('menubar-act')) {
      btn.text('메인메뉴 닫기');
    } else {
      btn.text('메인메뉴 열기');
    }
  });
  last.focusout(function() {
    container.removeClass('menubar-act');
    menu.removeClass('menu-act');
  });
});