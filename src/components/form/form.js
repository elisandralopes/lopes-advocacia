export default function Contactform() {
  return /*html*/ `
    
    <form
        class="form-content-info center--container"
        action="mailto: lopesadv@gmail.com"
        method="post"
        enctype="text/plain"
    >
    
        <input
            class="input-form"
            id="name"
            type="text"
            name="name"
            placeholder="Nome Completo*"
            required
        />
        
        <input
            class="input-form"
            id="email"
            type="email"
            name="email"
            size="30"
            placeholder="Email*"
            required
        />
        
        <input
            class="input-form"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefone*"
            required
        />

        <input
            class="input-form"
            id="subject"
            type="text"
            name="text"
            placeholder="Assunto*"
            required
        />

        <textarea
            class="textarea-form"
            id="message"
            name="message"
            cols="30"
            rows="5"
            placeholder="Mensagem*"
            required
        ></textarea>

        <input
            class="button--gold"
            type="submit"
            value="Enviar"
            class="button-pattern--blue"
        />
        </div>

        
    </form>`;
}
