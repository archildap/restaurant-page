import home from './home';
import header from './header';
import menu from './menu';
import about from './about';
import contact from './contact';


function displayController() {
    const content = document.querySelector('#content');

    const initialLoad = () => {
        content.appendChild(header());
        content.appendChild(home());
        document.querySelector('#home-section>.btn').addEventListener('click', () => {
            clearPage();
            content.appendChild(contact());
        });
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
            document.querySelector('#home-section>.btn').addEventListener('click', () => {
                clearPage();
                content.appendChild(contact());
            });
        } else if (e.target.textContent === 'Menu') {
            content.appendChild(menu());
        } else if (e.target.textContent === 'About') {
            content.appendChild(about());
        } else if (e.target.textContent === 'Contact') {
            content.appendChild(contact());
        } else content.appendChild(home());
    };

    nav.map(item => {
        item.addEventListener('click', (e) => handleLoad(e));
    });
    document.querySelector('.logo').addEventListener('click', (e) => handleLoad(e));

}

displayController();