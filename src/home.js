import '../styles/home.style.css';

export default function home() {
    const homePage = document.createElement('div');
    const header = document.createElement('h1');
    const bio = document.createElement('p');
    const bookBtn = document.createElement('button');
    const background = document.createElement('div');

    header.textContent = "Crust & Craft";
    bio.textContent = `Welcome to "Crust & Craft Pizzeria," where passion meets perfection in every slice! Nestled in the heart
    of the city, our pizza restaurant is a culinary haven for pizza enthusiasts seeking an unforgettable
    dining experience.`;
    bookBtn.textContent = 'BOOK NOW!';

    homePage.appendChild(header);
    homePage.appendChild(bio);
    homePage.appendChild(bookBtn);
    document.querySelector('#content').appendChild(background);

    homePage.setAttribute('id', 'home-section');
    bookBtn.classList.add('btn');
    background.classList.add('bg-image');

    return homePage;
}