function classificaPedidos(valorPedidio) {
    let nivel = ''
    return valorPedidio <= 10.000 ? nivel = 'bronze' : valorPedidio > 10.000 && valorPedidio < 99.999 ? nivel = 'prata' : valorPedidio >= 100.000 && valorPedidio < 500.000 ? nivel = 'ouro' : valorPedidio >= 500.000 ?  nivel = "platinum": ''
}

console.log(classificaPedidos(100.000));
console.log(classificaPedidos(7.000));
console.log(classificaPedidos(5480.000));
console.log(classificaPedidos(150.000));
console.log(classificaPedidos(890.000));
console.log(classificaPedidos(30.000));
