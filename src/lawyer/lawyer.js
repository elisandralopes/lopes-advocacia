import Button from "../components/button/button";

export default class Lawyer {
    render() {
        return /*html*/`
        <section class="advocacia-section" id="about">
            <div class="adv-container center--container">
                <h3 class="adv-container__title">Advocacia especializada</h3>
                
                <div class="adv-content">

                    <div class="description-container">
                        <div class="description-contact">
                            <img src="../icons/call.svg" alt="" />
                            <p>(95) 99175-9456</p>
                            <p>lopesadv@gmail.com.br</p>
                        </div>
                        
                        <div class="description-resume">
                            <img src="../icons/beenhere.svg" alt="" />
                            <p>
                            Sólida experiência na área cível Atendimento especializado e
                            dedicado Agilidade em oferecer soluções jurídicas Compromisso
                            com resultados favoráveis aos clientes
                            </p>
                        </div>
                    </div>

                    <div class="lawyer">
                        <img src="../img/advogada.png" alt="" />
                        <p class="laywer__name">Elisandra Lopes</p>
                        <p >OAB/RR nº 2302</p>
                    </div>

                    <div class="logo-buttons">
                        <div class="logo-adv">
                            <img
                            class="logo__image"
                            src="../img/logo.png""
                            alt=""/>
                            <span class="logo__name">Lopes Advocacia</span>
                        </div>
                        
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