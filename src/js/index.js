// import AOS from 'aos';


// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 160, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 700, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
//   });

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function handleScroll() {
    const elements = document.querySelectorAll('.unvisible');

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
            element.classList.remove('unvisible');
        }
        else {
            element.classList.remove('visible');
            element.classList.add('unvisible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

function handleBurgerBtn (btn) {
    const lines = document.querySelector('.burger_btn_line');
const nav = document.querySelector('.nav_list');
   lines.classList.toggle('burger_active');
   nav.classList.toggle('nav_visible');
};

 const btn = document.getElementsByClassName('burger_btn_conteiner')[0];
 btn.addEventListener('click', handleBurgerBtn);