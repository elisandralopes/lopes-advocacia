import Button from "../components/button/button";
import Logo from "../components/logo/logo";


export default class Header {

    render() {
        return /*html*/`<header>
        <div class="header-content center--container">

          ${Logo('Lopes Advocacia', '../img/logo.png', 'index.html')}
        
    
          <div class="menu">
            <div class="menu__item">
              <a href="#services">Serviços</a>
            </div>
            <div class="menu__item">
              <a href="#about">Sobre</a>
            </div>
            <div class="menu__item">
              <a href="#contact">Contato</a>
            </div>
            ${Button('Agendar Consulta', '#', 'button--gold')}
          </div>
        </div>
      </header>`;
    }
}
