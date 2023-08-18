import '../css/style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <div class="header-content center--container">
        <a href="index.html" class="logo">
          <img
            class="logo__image"
            src="src/assets/img/logo.png"
            alt="Logo do Escritório Lopes & Cia"
          />
          <span class="logo__name">Lopes Advocacia</span>
        </a>

        <div class="menu">
          <div class="menu__item">
            <a class="close-menu" href="#servicos">Serviços</a>
          </div>
          <div class="menu__item">
            <a class="close-menu" href="#contato">Contato</a>
          </div>
          <button type="button" class="menu__button default--button">Agendar Consulta</button>
        </div>
      </div>
    </header>

    <main>
      <section class="main-container">
        <div class="main-content center--container">
          <div class="main-text">
            <h1 class="main-text__title">Lopes Advocacia</h1>
            <p class="main-text__subtitle">Advocacia e Correspondência de Serviços Cartorários</p>
          </div>
          <div class="main-buttons">
            <button type="button" class="main-buttons__button default--button">Agendar Consulta</button>
            <button type="button" class="main-buttons__button default--button">Whatsapp</button>
          </div>
        </div>
      </section>

      <section class="service-areas">
        <div class="areas-content center--container">
            <h3>Areas de atuação</h3>
            <div class="area-cards">

              <div class="area-card">
                <img src="" alt="">
                <p>Direito Imobiliário</p>
              </div>

              <div class="area-card">
                <img src="" alt="">
                <p>Direito de Família</p>
              </div>

              <div class="area-card">
                <img src="" alt="">
                <p>Direito Sucessório</p>
              </div>

              <div class="area-card">
                <img src="" alt="">
                <p>Direito de Contratos </p>
              </div>

            </div>
        </div>
      </section>

      <section class="main-services">
        <div class="services-content center--container">
          <h3>Conheça nossos principais serviços</h3>
          
          <div class="service-cards">

            <div class="service-card">
              <p>Assessoramento jurídico</p>
              <p>Oferecemos assessoramento jurídico completo, orientação e suporte legal em diversas áreas cíveis.</p>
            </div>

            <div class="service-card">
              <p>Regularização imobiliária</p>
              <p>Oferecemos assessoramento jurídico completo, orientação e suporte legal em diversas áreas cíveis.</p>
            </div>

            <div class="service-card">
              <p>Usucapião</p>
              <p>Realizamos uma análise completa da situação de seu imóvel e identificamos as medidas necessárias para regularizar sua situação.</p>
            </div>

            <div class="service-card">
              <p>Inventário</p>
              <p>Assistência em todas as etapas do inventário extrajudicial ou judicial, partilha, aceitação e renúncia de herança.</p>
            </div>

            <div class="service-card">
              <p>Divórcio</p>
              <p>Assistência jurídica em divórcio judicial ou extrajudicial, plano de partilha, guarda, pensão.</p>
            </div>

            <div class="service-card">
              <p>Contratos</p>
              <p>Elaboração de contratos como compra e venda, de locação, prestação de serviços, termos de responsabilidade, entre outros.</p>
            </div>

          </div>

          <button>Ver todos os serviços</button>
        </div>
      </section>
      
      
      <section class="advocacia">
        <div class="adv-container center--container">
          <h3>Advocacia especializada</h3>
          <div class="adv-content">

            <div class="description">
              <div class="description-contact">
                <img src="" alt="">
                <p>(95) 99175-9456</p>
                <p>lopesadv@gmail.com.br</p>
              </div>

              <div class="description-resume">
                <img src="" alt="">
                <p>Sólida experiência na área cível
                Atendimento especializado e dedicado
                Agilidade em oferecer soluções jurídicas
                Compromisso com resultados favoráveis aos clientes</p>
              </div>
            </div>


            <div class="lawyer">
              <img src="" alt="">
              <p>Elisandra Lopes</p>
              <p>OAB/RR nº 2302</p>
            </div>

            <div class="logo-buttons">
              <img src="" alt="">
              <div>
                <button>Agendar Consulta</button>
                <button>Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <h3>Entre em contato conosco</h3>
      </section>

    </main>

    <footer>
        <div>
          <p>Todos os Direitos Reservados © Lopes Advocacia</p>
        </div>
    </footer>

  </div>
`;
