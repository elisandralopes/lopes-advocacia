import '../css/style.css';

document.querySelector('#app').innerHTML = 
/*html*/
`
  <div>
  <header>
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
        <div class="menu__item">
          <a href="#atuacao">Atuação</a>
        </div>
        <div class="menu__item">
          <a href="#services">Serviços</a>
        </div>
        <div class="menu__item">
          <a href="#about">Sobre</a>
        </div>
        <div class="menu__item">
          <a href="#contact">Contato</a>
        </div>
        <button type="button" class="menu__button button-pattern--gold">
          Agendar Consulta
        </button>
      </div>
    </div>
  </header>

  <main>
    <section class="main-container">
      <div class="main-content center--container">
        <div class="main-text">
          <h1 class="main-text__title">Lopes Advocacia</h1>
          <p class="main-text__subtitle">
            Advocacia e Correspondência de Serviços Cartorários
          </p>
        </div>
        <div class="main-buttons">
          <button type="button" class="main-buttons__button button-pattern--gold">
            Agendar Consulta
          </button>
          <button type="button" class="main-buttons__button button-pattern--gold">
            Whatsapp
          </button>
        </div>
      </div>
    </section>

    <section class="service-areas" id="atuacao">
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
    </section>

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

        <button class="services-button button-pattern--blue">Ver todos os serviços</button>
      </div>
    </section>

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
                <button class="button-pattern--gold">Agendar Consulta</button>
                <button class="button-pattern--gold">Whatsapp</button>
              </div>
            </div>
      

        </div>
      </div>
    </section>

    <section class="form-container" id="contact">
      <div class="form-content center--container">
        
        <form
              class="form-content-info center--container"
              action="mailto:elylopesdev@gmail.com"
              method="post"
              enctype="text/plain"
            >
            
            <input
              class="input-form"
              id="name"
              type="text"
              name="name"
              placeholder="Insira seu nome"
              required
            />
            
            <input
              class="input-form"
              id="email"
              type="email"
              name="email"
              size="30"
              placeholder="nome@email.com"
              required
            />
            
            <input
              class="input-form"
              id="phone"
              type="tel"
              name="phone"
              placeholder="(00) 00000-0000"
              required
            />
  
            <textarea
              class="textarea-form"
              id="mensage"
              name="mensage"
              cols="30"
              rows="5"
              placeholder="Insira sua mensagem ou dúvida"
              required
            ></textarea>
         
            <input
              class="botao"
              type="submit"
              value="Enviar"
              class="button-pattern--gold"
            />
            </div>
          </form>

      </div>
    </section>
  </main>

  <footer>
    <div class="center--container">
      <p>Todos os Direitos Reservados © Lopes Advocacia</p>
    </div>
  </footer>
  </div>
`;
