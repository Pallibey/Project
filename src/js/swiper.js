import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  breakpoints: {
    720: {
      spaceBetween: 0,
      enabled: false
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 16,
  slidesPerView: 'auto'
})
