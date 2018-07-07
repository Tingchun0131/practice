// 當畫面開始滾動時
$(window).scroll(function(){
    // 取得畫面滾動的位置
    const position = $(window).scrollTop();
    // 如果滾動位置超過100
    if (position > 100) {
      // 把.scrolling-img 加上class scrolling
      $('.scroll-img').addClass('scrolling');
    } else {
      // 把.scrolling-img 移除class scrolling
      $('.scroll-img').removeClass('scrolling');
    }
  });

 // 當#menuBtn被點擊時
$('#menuBtn').click(function(){
  // 把.menu與.dark-cover加上class active
  $('.menu').addClass('active');
  $('.dark-cover').addClass('active');
});

// 當.dark-cover, #closeBtn被點擊時
$('.dark-cover, #closeBtn').click(function(){
  // 把.menu與.dark-cover移除class active
  $('.menu').removeClass('active');
  $('.dark-cover').removeClass('active');
});