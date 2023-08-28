import Button from "../components/button";

export default class Services {
    render() {
        return /*html*/`
        <!--<section class="service-areas" id="atuacao">
            <div class="areas-content center--container">
                <h3 class="areas-content__title">Areas de atuação</h3>
                <div class="area-cards">
                <div class="area-card">
                    <img src="../icons/house.svg" alt="" />
                    <p>Direito Imobiliário</p>
                </div>

                <div class="area-card">
                    <img src="../icons/family.svg" alt="" />
                    <p>Direito de Família</p>
                </div>

                <div class="area-card">
                    <img src="../icons/law.svg" alt="" />
                    <p>Direito Sucessório</p>
                </div>

                <div class="area-card">
                    <img src="../icons/article.svg" alt="" />
                    <p>Direito de Contratos</p>
                </div>
                </div>
            </div>
        </section>-->

        <section class="main-services" id="services">
            <div class="services-content center--container">
                <h3 class="services-content__title">Conheça nossos principais serviços</h3>

                <div class="service-cards">
                <div class="service-card">
                    <p class="service-card__title">■ Assessoramento jurídico</p>
                    <p>
                    Oferecemos assessoramento jurídico completo, orientação e
                    suporte legal em diversas áreas cíveis.
                    </p>
                </div>

                <div class="service-card">
                    <p class="service-card__title">■ Regularização imobiliária</p>
                    <p>
                    Oferecemos assessoramento jurídico completo, orientação e
                    suporte legal em diversas áreas cíveis.
                    </p>
                </div>

                <div class="service-card">
                    <p class="service-card__title">■ Usucapião</p>
                    <p>
                    Realizamos uma análise completa da situação de seu imóvel e
                    identificamos as medidas necessárias para regularizar sua
                    situação.
                    </p>
                </div>

                <div class="service-card">
                    <p class="service-card__title">■ Inventário</p>
                    <p>
                    Assistência em todas as etapas do inventário extrajudicial ou
                    judicial, partilha, aceitação e renúncia de herança.
                    </p>
                </div>

                <div class="service-card">
                    <p class="service-card__title">■ Divórcio</p>
                    <p>
                    Assistência jurídica em divórcio judicial ou extrajudicial,
                    plano de partilha, guarda, pensão.
                    </p>
                </div>

                <div class="service-card">
                    <p class="service-card__title">■ Contratos</p>
                    <p>
                    Elaboração de contratos como compra e venda, de locação,
                    prestação de serviços, termos de responsabilidade, entre outros.
                    </p>
                </div>
                </div>

                <div class="services-button">
                    ${Button('Ver todos os serviços', "#", 'button--blue')}
                </div>
                <!-- <button class="services-button button-pattern--blue">Ver todos os serviços</button> -->
            </div>
        </section>`

    }
}