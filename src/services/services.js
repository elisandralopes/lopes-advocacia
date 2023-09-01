import Button from '../components/button/button';
import Card from '../components/card-service/card-service';
import servicesData from './services.json';

export default class Services {
  render() {
    return /*html*/ `
      <section class="main-services" id="services">
        <div class="services-content center--container">
          <h3 class="services-content__title">${servicesData.title}</h3>
          <p class="services-content__subtitle">${servicesData.subtitle}</p>
          <div class="service-cards">
            ${servicesData.services
              .map(service => Card(service.title, service.description))
              .join('')}
          </div>
          <div class="services-button">
            ${Button('Agendar Consulta', '#', 'button--blue')}
          </div>
        </div>
      </section>`;
  }
}
