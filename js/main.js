$(document).ready(function(){
  $(".list_arr_icon").click(function () {
    $('ul.sub_menu').not($(this).siblings()).slideUp();
    $(this).siblings("ul.sub_menu").slideToggle();
});

});
