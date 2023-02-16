function passaOuNaoPassa(carros) {
  let permitidos = [];
  let naoPermitidos = [];
  const carrosArray = Object.values(carros);
  

  for (let i = 0; i < carrosArray.length; i++) { 
    let carro = carrosArray[i] // aq nao foi inicializado um array vazio por que o loop tem que saber em quem vai pecorrer as interaçoes
    if (carro.peso > 1500 || carro.comprimento > 5) {
      naoPermitidos.push(carro);
    } else {
      permitidos.push(carro);
    }
  }

  return { permitidos, naoPermitidos };
}

console.log(passaOuNaoPassa({
  carro1: { peso: 800, comprimento: 4.2 },
  carro2: { peso: 1200, comprimento: 7.8 },
  carro3: { peso: 9500, comprimento: 4.1 },
  carro4: { peso: 1800, comprimento: 5.6 },
  carro5: { peso: 700, comprimento: 3.9 }
}));


