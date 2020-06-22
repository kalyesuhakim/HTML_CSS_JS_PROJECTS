
$(document).ready(function(){
    var classList = ['spiderman', 'captain', 'ironman'];
    var marvelHeroSlider = new Swiper(".marvel-container .swiper-container", {
      loop: false,
      slidesPerView: 1,
      pagination: {
          el: '.marvel-container .swiper-pagination',
          type: 'bullets',
          clickable: true,
          
      },
      on: {
          init: function(){
              var index = this.activeIndex;
              $(".marvel-container")
              .removeClass(classList)
              .addClass(classList[index]);
              $(".marvel-container .img-wrapper")
              .removeClass('active')
              .eq(index)
              .addClass('active');
          }
      }
    }).on('slideChange', function(){
        var index = this.activeIndex;
        $(".marvel-container")
            .removeClass(classList)
            .addClass(classList[index]);
            $(".marvel-container .img-wrapper")
            .removeClass('active').
            eq(index)
            .addClass('active');
    });
});