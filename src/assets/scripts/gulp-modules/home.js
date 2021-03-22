
const promo = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    init: function () {
    },
    activeIndexChange(e) {
      console.log(e)
      try {
        if(e.pagination.bullets.length < e.snapIndex) {
          $('.promo-slider__current').text(`/ 01`)
          return
        }

        if(e.previousIndex === 1 && !e.activeIndex) {
          $('.promo-slider__current').text(`/ 0${e.pagination.bullets.length}`)
          return;
        }
      } catch(e) {}

      $('.promo-slider__current').text(`/ 0${e.snapIndex}`)
    }
  },
})

