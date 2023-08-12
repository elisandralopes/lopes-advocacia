import './style.css';
import Header from './src/header/header';
import Main from './src/main/main';

const header = new Header();
const main = new Main();
document.querySelector('#header').innerHTML = header.render();
document.querySelector('#main').innerHTML = main.render();



