import restImage from '../images/contact-img.jpg';
import '../styles/contact.style.css';

function fieldMaker(fieldLabel, inputType, idName) {
    const fieldLi = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', `${idName}`);
    input.setAttribute('id', `${idName}`);
    input.setAttribute('name', `${idName}`);
    input.setAttribute('type', `${inputType}`);
    input.setAttribute('required', '');

    label.textContent = `${fieldLabel}*`;


    fieldLi.appendChild(label);
    fieldLi.appendChild(input);

    return fieldLi;
}


export default function contact() {
    const contactPage = document.createElement('div');
    const form = document.createElement('form');
    const formUl = document.createElement('ul');
    const submitBtn = document.createElement('button');
    const reservationHeader = document.createElement('h2');
    const imgSection = document.createElement('div');
    const restImg = new Image();
    restImg.src = restImage;



    contactPage.setAttribute('id', 'contact-section');
    // form.setAttribute('method', 'post');
    submitBtn.classList.add('submit', 'btn');
    submitBtn.textContent = 'Book';
    imgSection.classList.add('img-section');
    reservationHeader.textContent = 'Book a Reservation!';


    imgSection.appendChild(restImg);
    form.appendChild(reservationHeader);
    formUl.appendChild(fieldMaker('FIRST NAME', 'text', 'first-name')).focus();
    formUl.appendChild(fieldMaker('LAST NAME', 'text', 'last-name'));
    formUl.appendChild(fieldMaker('PHONE NUMBER', 'tel', 'phone-number'));
    formUl.appendChild(fieldMaker('RESERVATION DATE', 'date', 'res-date'));
    formUl.appendChild(fieldMaker('RESERVATION TIME', 'time', 'res-time'));
    formUl.appendChild(fieldMaker('NUMBER OF PEOPLE', 'number', 'num-people'));


    form.appendChild(formUl);
    form.appendChild(submitBtn);
    contactPage.appendChild(imgSection);
    contactPage.appendChild(form);


    form.querySelector('input[type="number"]').setAttribute('min', '1');
    form.querySelector('input[type="number"]').setAttribute('max', '10');
    return contactPage;

}
