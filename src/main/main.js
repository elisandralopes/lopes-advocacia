import Button from "../components/button";

export default class Main {
    render() {
        return /*html*/`
        <section class="main-container">
        <div class="main-content center--container">
          <div class="main-text">
            <h1 class="main-text__title">Lopes Advocacia</h1>
            <p class="main-text__subtitle">
              Advocacia cível especializada e Correspondência de Serviços Cartorários
            </p>
          </div>
          <div class="main-buttons">
            ${Button('Agendar Consulta', '#', 'button--gold')}
            ${Button('Whatsapp', '#', 'button--gold')}
          </div>
        </div>
      </section>`;
    }
}