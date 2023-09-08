import './src/global.css';

import Header from './src/header/header';
import Main from './src/main/main';
import Services from './src/services/services';
import Lawyer from './src/lawyer/lawyer';
import Contact from './src/contact/contact';
import Footer from './src/footer/footer';

async function App() {
  const header = new Header();
  const main = new Main();
  const services = new Services();
  const lawyer = new Lawyer();
  const contact = new Contact();
  const footer = new Footer();

  document.querySelector('#header').innerHTML = await header.render();
  document.querySelector('#main').innerHTML = await main.render();
  document.querySelector('#services').innerHTML = await services.render();
  document.querySelector('#lawyer').innerHTML = await lawyer.render();
  document.querySelector('#contact').innerHTML = await contact.render();
  document.querySelector('#footer').innerHTML = await footer.render();
}

App();
