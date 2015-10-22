$('a[href="#blog"]').on('click', function(){
  $('#blog').toggleClass('active').siblings().removeClass('active');
});

$('a[href="#art"]').on('click', function(){
  $('#art').toggleClass('active').siblings().removeClass('active');
});

#('a[href="#contact"]').on('click', function(){
  $('#contact').toggleClass('active').siblings().removeClass('active');
});
