document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var mensagemEnviada = document.getElementById("mensagem-enviada");
    if (window.confirm("Tem certeza de que deseja enviar os dados?")) {
      mensagemEnviada.innerHTML = "Dados enviados com sucesso!";
      mensagemEnviada.style.display = "block";
    }
  });

  

  console.log("incerçao de branch nova");