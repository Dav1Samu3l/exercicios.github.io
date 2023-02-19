function classificaIdade(idades) {
    return idades >= 0 && idades <= 12 ? console.log('criança') : idades >= 13 && idades <= 17 ? console.log("adolencente ") : idades >= 18 && idades <= 65 ? console.log("adulto") : idades >= 66 ? console.log('senior') : console.log('idade  invalida');
}

classificaIdade(32)
classificaIdade(18)
classificaIdade(17)
classificaIdade(-1)
classificaIdade(67)
classificaIdade(15)






