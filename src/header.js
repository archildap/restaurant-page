import hamburgerMenu from '../images/hamburger-menu.svg';

export default function header() {
    const header = document.createElement('header');
    const logo = document.createElement('h3');
    const navigation = document.createElement('ul');
    const homeNav = document.createElement('li');
    const contactNav = document.createElement('li');
    const aboutNav = document.createElement('li');
    const menuNav = document.createElement('li');
    const hamMenu = new Image();
    hamMenu.src = hamburgerMenu;


    homeNav.textContent = 'Home';
    menuNav.textContent = 'Menu';
    aboutNav.textContent = 'About';
    contactNav.textContent = 'Contact';
    logo.textContent = 'Crust & Craft';

    homeNav.classList.add('nav', 'nav-home');
    menuNav.classList.add('nav', 'nav-menu');
    aboutNav.classList.add('nav', 'nav-about');
    contactNav.classList.add('nav', 'nav-contact');
    logo.classList.add('logo');
    hamMenu.classList.add('hamburger-menu');

    navigation.appendChild(homeNav);
    navigation.appendChild(menuNav);
    navigation.appendChild(aboutNav);
    navigation.appendChild(contactNav);

    const handleBurgerMenu = () => {
        navigation.style.display = navigation.style.display === 'flex' ? null : 'flex';

    }

    hamMenu.addEventListener('click', () => handleBurgerMenu());

    header.appendChild(logo);
    header.appendChild(navigation);
    header.appendChild(hamMenu);

    header.setAttribute('id', 'header')

    return header;
}