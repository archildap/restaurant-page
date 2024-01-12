import home from './home';
import header from './header';
import menu from './menu';


function displayController() {
    const content = document.querySelector('#content');

    const initialLoad = () => {
        content.appendChild(header());
        content.appendChild(home());
    }

    initialLoad();

    const nav = [...document.querySelectorAll('.nav')];

    const clearPage = () => {
        while (content.firstChild.nextSibling) {
            content.removeChild(content.firstChild.nextSibling);
        }
    };

    const handleLoad = (e) => {
        clearPage();
        if (e.target.textContent === 'Home') {
            content.appendChild(home());
        } else if (e.target.textContent === 'Menu') {
            content.appendChild(menu());
        }
    };

    nav.map(item => {
        item.addEventListener('click', (e) => handleLoad(e));
    });



}

displayController();