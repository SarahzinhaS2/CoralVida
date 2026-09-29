function salvarCadastro(cadastro) {

    localStorage.setItem("cadastro", JSON.stringify(cadastro));

}

function buscarCadastro() {

    const cadastroSalvo = localStorage.getItem("cadastro");

    if (cadastroSalvo) {

        return JSON.parse(cadastroSalvo);

    }

    return null;

}