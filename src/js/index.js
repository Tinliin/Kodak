

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function handleScroll() {
    const unvisibles = document.querySelectorAll('.unvisible');
    const visibles = document.querySelectorAll(".visible");
    const elements = [...visibles, ...unvisibles];
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