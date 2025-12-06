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
  new Swiper('#swiper-training', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-training',
      prevEl: '#swiper-button-prev-training',
    },
    pagination: {
      el: '#swiper-pagination-training',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    centeredSlides: false,
    resistance: false,
    resistanceRatio: 0,
    shortSwipes: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  new Swiper('#swiper-reviews', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-reviews',
      prevEl: '#swiper-button-prev-reviews',
    },
    pagination: {
      el: '#swiper-pagination-reviews',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    centeredSlides: false,
    resistance: false,
    resistanceRatio: 0,
    shortSwipes: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 120,
      },
    }
  });
  new Swiper('#swiper-adv', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-adv',
      prevEl: '#swiper-button-prev-adv',
    },
    pagination: {
      el: '#swiper-pagination-adv',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
    centeredSlides: false,
    resistance: false,
    resistanceRatio: 0,
    shortSwipes: false,
    freeMode: true,
    enabled: false,
    slidesPerView: 'auto',
    breakpoints: {
      1200: {
        slidesPerView: 3,
        enabled: true,
        spaceBetween: 80,
      },
    }
  });
  new Swiper('#swiper-gallery', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#swiper-button-next-gallery',
      prevEl: '#swiper-button-prev-gallery',
    },
    pagination: {
      el: '#swiper-pagination-gallery',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    breakpoints: {
      768: {
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

