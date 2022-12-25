import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  breakpoints: {
    720: {
      enabled: false
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 0,
  slidesPerView: 'auto'
})
