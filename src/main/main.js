import Button from "../components/button/button";

export default class Main {
    render() {
        return /*html*/`
        <section class="main-container">
        <div class="main-content center--container">
          <div class="main-text">
            <h1 class="main-text__title">Advocacia cível especializada </h1>
            <p class="main-text__subtitle">
            Destaque em Direito Imobiliário, Família, Sucessório e Contratos
            </p>
          </div>
          <div class="main-buttons">
            ${Button('Agendar Consulta', '#', 'button--transparent')}
            ${Button('Whatsapp', '#', 'button--transparent')}
          </div>
        </div>
      </section>`;
    }
}