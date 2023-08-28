import './src/styles/global.css';
import './src/styles/logo.css';
import './src/styles/button.css';
import './src/styles/header.css';
import './src/styles/main.css';
import './src/styles/services.css';
import './src/styles/lawyer.css';
import './src/styles/contact.css';
import './src/styles/footer.css';


import Header from './src/header/header';
import Main from './src/main/main';
import Services from './src/services/services';
import Lawyer from './src/lawyer/lawyer';
import Contact from './src/contact/contact';
import Footer from './src/footer/footer';

const header = new Header();
const main = new Main();
const services = new Services();
const lawyer = new Lawyer();
const contact = new Contact();
const footer = new Footer();

document.querySelector('#header').innerHTML = header.render();
document.querySelector('#main').innerHTML = main.render();
document.querySelector('#services').innerHTML = services.render();
document.querySelector('#lawyer').innerHTML = lawyer.render();
document.querySelector('#contact').innerHTML = contact.render();
document.querySelector('#footer').innerHTML = footer.render();

