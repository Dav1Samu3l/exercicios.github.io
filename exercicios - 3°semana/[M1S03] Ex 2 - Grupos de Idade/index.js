function classificaIdade(idades) {
    if ( idades >=0 && idades <= 12) {
        console.log('criança');
    } else if (idades >= 13 && idades <= 17) {
        console.log("adolencente ");
    } else if (idades >= 18 && idades <= 65) {
        console.log("adulto");
    } else if (idades >= 66) {
        console.log('senior');
    }else{
        console.log('idade  invalida');
    }
    return
}

classificaIdade(32)
classificaIdade(18)
classificaIdade(17)
classificaIdade(-1)
classificaIdade(67)
classificaIdade(15)






