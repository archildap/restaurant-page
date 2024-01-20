import restaurantImg from '../images/rest-background.jpg';
import '../styles/about.style.css';



export default function about() {
    const aboutPage = document.createElement('div');
    const aboutText = document.createElement('div');
    const title = document.createElement('h3');
    const aboutPar = document.createElement('p');
    const restImg = new Image();

    restImg.src = restaurantImg;

    title.textContent = 'Crust & Craft';
    aboutPar.textContent = 'At Crust & Craft, we believe that the foundation of an exceptional pizza lies in its crust. Our expert chefs meticulously handcraft each pizza crust using only the finest, high-quality ingredients. We take pride in our commitment to authenticity, using traditional methods to create a crust that is both crisp and chewy, providing the perfect canvas for our flavorful toppings.';

    aboutPage.setAttribute('id', 'about-section');

    aboutText.appendChild(title);
    aboutText.appendChild(aboutPar);
    aboutPage.appendChild(aboutText);
    aboutPage.appendChild(restImg);

    return aboutPage;
}