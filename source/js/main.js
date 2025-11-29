// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('#swiper-hero', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-hero',
      prevEl: '#swiper-button-prev-hero',
    },
    pagination: {
      el: '#swiper-pagination-hero',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
  });
  new Swiper('#swiper-tours', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-tours',
      prevEl: '#swiper-button-prev-tours',
    },
    pagination: {
      el: '#swiper-pagination-tours',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const mobileButton = document.querySelector('.header__menu-button');
  const nav = document.querySelector('.header__nav');

  mobileButton.addEventListener('click', (event) => {
    event.target.classList.toggle('opened');
    nav.classList.toggle('active');
  });
});

