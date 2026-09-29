const conteudo = document.querySelector("#conteudo");

function mostrarPagina(pagina) {

    if (pagina === "inicio") {

        conteudo.innerHTML = `
            <section>
                <h2>Sobre a CoralVida</h2>

                <img src="../imagens/corais.jpg" alt="Recifes de corais no oceano">

                <p>
                    A CoralVida é uma ONG que trabalha para proteger os recifes de corais
                    e ajudar na preservação dos oceanos.
                </p>
            </section>

            <section>
                <h2>Entre em contato</h2>

                <p>Email: contato@coralvida.org</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>Endereço: São Paulo - SP</p>
            </section>
        `;

    }

    if (pagina === "projetos") {

        conteudo.innerHTML = `
            <section>
                <h2>Nossos projetos</h2>

                <p>
                    A CoralVida desenvolve projetos para proteger os recifes de corais
                    e ajudar na preservação dos oceanos.
                </p>
            </section>

            <section>
                <h2>Projetos de preservação</h2>

                <article>
                    <h3 id="recifes">Proteção dos recifes</h3>

                    <span class="badge">Preservação</span>

                    <p>
                        O projeto busca ajudar na proteção dos recifes de corais
                        e na recuperação de áreas afetadas.
                    </p>
                </article>

                <article>
                    <h3 id="limpeza">Limpeza dos oceanos</h3>

                    <span class="badge">Preservação</span>

                    <p>
                        São realizadas ações para retirar resíduos do oceano
                        e conscientizar as pessoas sobre a importância de manter
                        os mares limpos.
                    </p>
                </article>
            </section>

            <div class="alerta">
                <strong>Participe!</strong>
                As ações de voluntariado estão abertas para novos participantes.
            </div>

            <section>
                <h2>Voluntariado</h2>

                <p>
                    Quem quiser ajudar pode participar das ações de voluntariado,
                    contribuindo com atividades de preservação e conscientização.
                </p>
            </section>

            <section>
                <h2>Doações</h2>

                <p>
                    As doações ajudam a CoralVida a manter seus projetos e continuar
                    trabalhando na proteção dos recifes de corais e dos oceanos.
                </p>
            </section>
        `;

    }

    if (pagina === "cadastro") {

        conteudo.innerHTML = `
            <h2>Cadastre-se para participar</h2>

            <form>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome">

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email">

                    <label for="nascimento">Data de nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento">

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00">

                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(00) 00000-0000">

                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000">

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade">

                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado">

                </fieldset>

                <button type="submit">Cadastrar</button>

            </form>
        `;

    }

}

document.querySelectorAll(".menu-links a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        mostrarPagina(this.dataset.pagina);

    });

});

mostrarPagina("inicio");
