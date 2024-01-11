import home from './home';
import header from './header';



function displayController() {
    const content = document.querySelector('#content');
    // const nav = [...document.querySelectorAll('.nav')];
    // nav.map(item => {
    //     item.addEventListener('click', loadPage());
    // });
    content.appendChild(header());
    content.appendChild(home());
}

displayController();