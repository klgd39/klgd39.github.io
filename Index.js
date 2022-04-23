window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".section-header__link-select").forEach(item => {
        item.addEventListener("click", function() {
          let btn = this;
          let dropdown = this.parentElement.querySelector(".section-header__select");
          
          
          document.querySelectorAll(".section-header__select").forEach(el => {
            if (el != dropdown) {
              el.classList.remove("is-active");
            }
          })

          document.querySelectorAll(".section-header__link-select").forEach(el => {
            if (el != btn) {
              el.classList.remove("btn-active")
            } else {
              btn.classList.toggle("btn-active")
            }
          })
          
          dropdown.classList.toggle("is-active");
        })

/*burger*/
        document.querySelector('#burger__button').addEventListener('click', function() {
          document.querySelector('#burger__menu').classList.toggle('burger-menu__is-active')
  
      })
      document.querySelector('#button__closed-burger').addEventListener('click', function() {
          document.querySelector('#burger__menu').classList.remove('burger-menu__is-active')
      })

/*MODAL*/

        document.querySelector('#section-gallery__picture').addEventListener('click', function() {
          document.querySelector('#body').classList.toggle('hidden')

        })
        document.querySelector('#button__closed-modal').addEventListener('click', function() {
          document.querySelector('#body').classList.remove('hidden')
        })

/*search*/

      document.querySelector('#search__button').addEventListener('click', function() {
        document.querySelector('#search__form').classList.toggle('search-form__is-active')

    })
    document.querySelector('#button__closed-search').addEventListener('click', function() {
        document.querySelector('#search__form').classList.remove('search-form__is-active')
    })
  
      })

});

document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})


const container = document.querySelector(".section-hero")
const swiper = new Swiper('.swiper-g', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})

new Swiper('.swiper-gallery',{
  loop: false,
  pagination: {
    el: '.swiper-pagination-gallery',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-gallery-button-next',
    prevEl: '.swiper-gallery-button-prev',
  },

  breakpoints: {
    530: {
      slidesPerView: 2,
      spaceBetween: 38
    },
    860: {
      slidesPerView: 2,
      spaceBetween: 150
    },
    1020: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

new Swiper('.swiper-projects',{
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-projects-button-next',
    prevEl: '.swiper-projects-button-prev',
  },

  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    860: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

new Swiper('.swiper-developments', {
  loop: false,

  pagination: {
    el: '.swiper-pagination-development',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-developments-button-next',
    prevEl: '.swiper-developments-button-prev',
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 38,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});

new tippy('#popup1', {
  trigger: 'click',
  content: 'Пример современных тенденций - современная методология разработки',
});
  
tippy('#popup2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
});

tippy('#popup3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
  maxWidth: 250,
})

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7(999) 999 99 99");
im.mask(selector);

new JustValidate('.section-contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Укажите Ваш телефон',
},

});


const elements = document.querySelectorAll('select');
elements.forEach(el => {
  const choices = new Choices(el, {
  searchEnabled: false,
  /*placeholder: true,
  shouldSort: false,*/
});
});

ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 12,
            });
            myMap.behaviors.disable([
              'drag',
              'scrollZoom'
            ]);
            var zoomControl = new ymaps.control.ZoomControl({
              options: {
                  size: "small"
              }
          });

      myMap.controls.add(zoomControl);

      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('zoomControl');
            var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
              type: "Point",
              iconLayout: 'default#image',
              iconImageHref: 'img/markermap.svg',
              iconImageSize: [20, 20],
              iconImageOffset: [-3, -30]
              });
              myMap.geoObjects.add(myPlacemark);
        
        }
        myMap.controls.add('zoomControl', {
          size: 'small',
          float: 'none',
          position: {
              bottom: '50px',
              right: '30px'
          }
      });

