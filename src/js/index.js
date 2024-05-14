

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -300 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+200
    );
}
function handleScroll() {
    const invisibles = document.querySelectorAll('.invisible');
    // const visibles = document.querySelectorAll(".visible");
    // const elements = [...visibles, ...invisibles];
    invisibles.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
            element.classList.remove('invisible');
        }
        // else {
        //     element.classList.remove('visible');
        //     element.classList.add('invisible');
        // }
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