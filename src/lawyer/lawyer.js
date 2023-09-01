import Button from '../components/button/button';
import Logo from '../components/logo/logo';
import LawyerContacts from '../components/card-contacts/card-contacts';
import lawyerData from './lawyer.json';

export default class Lawyer {
  render() {
    return /*html*/ `
      <section class="advocacia-section" id="about">
        <div class="adv-container center--container">
          <h3 class="adv-container__title">${lawyerData.title}</h3>
          
          <div class="adv-content">
            <div class="lawyer">
              <img src="${lawyerData.urlLawyer}" alt="" />
            </div>  

            <div class="description-container">  
              <div class="description-resume">
                <img src="${lawyerData.urlIcon2}" alt="" />
                <p> ${lawyerData.description}</p>
              </div>
              
              ${LawyerContacts(
                lawyerData.urlIcon,
                lawyerData.tel,
                lawyerData.email
              )}   
            </div>

            <div class="logo-buttons">
              ${Logo(
                lawyerData.nameLogo,
                lawyerData.urlImage,
                lawyerData.urlHome
              )}            
              <div class="button-adv">
                  ${Button('Agendar Consulta', '#', 'button--gold')}
                  ${Button('Whatsapp', '#', 'button--gold')}
              </div>
            </div>
          </div>
        </div>
      </section>`;
  }
}
