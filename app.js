import './src/styles/global.css';
import './src/components/logo/logo.css';
import './src/components/button/button.css';
import './src/components/card-service/card-service.css';
import './src/header/header.css';
import './src/main/main.css';
import './src/services/services.css';
import './src/lawyer/lawyer.css';
import './src/contact/contact.css';
import './src/footer/footer.css';

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
