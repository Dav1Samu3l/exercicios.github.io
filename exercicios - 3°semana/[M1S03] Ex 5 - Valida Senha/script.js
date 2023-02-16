function validaSenha() {
    let mensagem;
    let botao = addEventListener('submit',() => {
        event.preventDefault();
        let senhaInput = document.querySelector('#senha').value
        const senha = 123
        if (senhaInput == senha) {
            mensagem = 'liberado'
        } else {
            mensagem = 'acesso nao liberado'
        }
        document.querySelector('#mensagem').innerHTML = mensagem
    })
    return mensagem
}

validaSenha()






