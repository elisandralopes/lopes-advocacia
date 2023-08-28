export default class Contact {
    render() {
        return /*html*/`
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
        </section>` 
    }
}