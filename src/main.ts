import './style.css';

const date = new Date();
const dateContainer = document.querySelector('.date-container') as HTMLElement;
dateContainer.innerHTML = date.getFullYear().toString();