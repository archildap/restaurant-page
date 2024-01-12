import hamPepperoni from '../images/ham-pepperoni.jpg';
import cheesePizza from '../images/cheese-pizza.jpg';
import hawaiian from '../images/hawaiian.jpg';
import genovese from '../images/genovese.jpg';
import neapolitan from '../images/neapolitan.jpg';
import veggie from '../images/veggie.jpg';
import margherita from '../images/margherita.jpg';

function menuCard(title, price, img) {
    const menuCard = document.createElement('div');
    const dish = document.createElement('h3');
    const dishPrice = document.createElement('p');
    const orderBtn = document.createElement('button');
    const dishImg = new Image();


    menuCard.classList.add('menu-card');
    orderBtn.classList.add('btn');

    dishImg.src = img;
    dish.textContent = title;
    dishPrice.textContent = price;
    orderBtn.textContent = 'Order Now!';

    menuCard.appendChild(dishImg);
    menuCard.appendChild(dish);
    menuCard.appendChild(dishPrice)
    menuCard.appendChild(orderBtn);

    return menuCard;
}

export default function menu() {
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menu-section');
    menuPage.appendChild(menuCard('Pepperoni, Ham & Mushrooms', '$16.25', hamPepperoni));
    menuPage.appendChild(menuCard('Cheese  & Tomato', '$15.00', cheesePizza));
    menuPage.appendChild(menuCard('Hawaiian', '$17.50', hawaiian));
    menuPage.appendChild(menuCard('Genovese', '$18.25', genovese));
    menuPage.appendChild(menuCard('Neapolitan Pizza', '$16.50', neapolitan));
    menuPage.appendChild(menuCard('Veggie', '$20.00', veggie));
    menuPage.appendChild(menuCard('Margherita', '$22.00', margherita));

    return menuPage;
}