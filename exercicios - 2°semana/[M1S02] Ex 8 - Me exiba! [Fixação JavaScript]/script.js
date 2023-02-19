function nome() {
  let ola=   document.getElementById('button')
    ola.addEventListener('click', function () {
       let nome =  prompt('Qual é o seu nome?')
        alert(`Seu nome é ${nome}`)
    })
    return nome

}
nome()

