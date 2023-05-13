const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    animOnScroll();
}
let scrollpos = window.scrollY;
const navScroll_1 = document.querySelector(".nav-scroll_1");
const navScroll_2 = document.querySelector(".nav-scroll_2");
const scrollChange = 1;
const add_class_on_scroll_1 = () => navScroll_1.classList.add("scroll_1");
const remove_class_on_scroll_1 = () => navScroll_1.classList.remove("scroll_1");
const add_class_on_scroll_2 = () => navScroll_2.classList.add("scroll_2");
const remove_class_on_scroll_2 = () => navScroll_2.classList.remove("scroll_2");
window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) {
        add_class_on_scroll_1();
        add_class_on_scroll_2();
    } else {
        remove_class_on_scroll_1();
        remove_class_on_scroll_2();
    }
});
document.querySelector('.mobile').addEventListener('click', _ => {
    document.querySelector('.mobile-hide').classList.toggle('mobile-menu');
    document.querySelector('.mobile-hide').classList.remove('mob-1');
})
document.querySelector('.close').addEventListener('click', _ => {
    document.querySelector('.mobile-hide').classList.remove('mobile-menu');
    document.querySelector('.mobile-hide').classList.toggle('mob-1');
})
document.querySelector('.nav-item_2').addEventListener('click', _ => {
    document.querySelector('.mobile-hide').classList.remove('mobile-menu');
    document.querySelector('.mobile-hide').classList.toggle('mob-1');
})
document.querySelector('.nav-item_3').addEventListener('click', _ => {
    document.querySelector('.mobile-hide').classList.remove('mobile-menu');
    document.querySelector('.mobile-hide').classList.toggle('mob-1');
})
document.querySelector('.nav-item_4').addEventListener('click', _ => {
    document.querySelector('.mobile-hide').classList.remove('mobile-menu');
    document.querySelector('.mobile-hide').classList.toggle('mob-1');
})
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    let close = menu.find('.close-sms');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    close.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
    }
}
burgerMenu('.burger-menu');
