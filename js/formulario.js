document.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.querySelector("#nome");

    const email = document.querySelector("#email");

    if (nome.value === "") {

        alert("Preencha o nome.");

        nome.focus();

        return;

    }

    if (email.value === "") {

        alert("Preencha o e-mail.");

        email.focus();

        return;

    }

    const cadastro = {

        nome: nome.value,

        email: email.value

    };

    salvarCadastro(cadastro);

    alert("Cadastro realizado!");

});