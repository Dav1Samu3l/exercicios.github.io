function classificaPedidos(valorPedidio) {
    let nivel = ''

    if (valorPedidio <= 10.000) {
        nivel = 'bronze'
    } else if (valorPedidio > 10.000 && valorPedidio < 99.999) {   
        nivel = 'prata'
    } else if (valorPedidio >= 100.000 && valorPedidio < 500.000) {
        nivel = 'ouro'
    } else if (valorPedidio >= 500.000) {
        nivel = "platinum"
    } return nivel

}

console.log(classificaPedidos(100.000));
console.log(classificaPedidos(7.000));
console.log(classificaPedidos(5480.000));
console.log(classificaPedidos(150.000));
console.log(classificaPedidos(890.000));
console.log(classificaPedidos(30.000));
