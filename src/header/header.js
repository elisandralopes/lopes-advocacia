import Button from "../components/button";

export default class Header {

    render() {
        return /*html*/`<header>
        <div class="header-content center--container">
          <a href="index.html" class="logo">
            <img
              class="logo__image"
              src="../img/logo.png"
              alt=""
            />
            <span class="logo__name">Lopes Advocacia</span>
          </a>
    
          <div class="menu">
            <!--<div class="menu__item">
              <a href="#atuacao">Atuação</a>
            </div> -->
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
