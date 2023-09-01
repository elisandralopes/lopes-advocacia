import Contactform from '../components/form/form';
import contactData from './contact.json';

export default class Contact {
  render() {
    return /*html*/ `
      <section class="contact-container" id="contact">
        <div class="contact-content">

            <div class="info-content">
              <h3 class="info-content__title">${contactData.title}</h3>
              <p>${contactData.subtitle}</p>
              <div>
                <div class="info-content__contact">
                  <img src="${contactData.urlIconCall}" alt="" /><p>${
      contactData.tel
    }</p>
                </div>
                <div class="info-content__contact">
                  <img src="${contactData.urlIconEmail}" alt="" /><p>${
      contactData.email
    }</p>
              </div>
              
              </div>
              <p>${contactData.addres}</p>
              <iframe src="${contactData.mapa}"></iframe>
            </div>

            <div class="form-content">
              <p>${contactData.description1}</p>
              <p>${contactData.description2}</p>
              ${Contactform()}
            </div>
        </div>          
      </section>`;
  }
}
