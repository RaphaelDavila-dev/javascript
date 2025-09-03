function calcular() {
    let nascimento = document.getElementById('txtn')
    let res = document.querySelector('div#res')
    let anoatual = new Date().getFullYear()
    
    //verifica se os valores foram preenchidos
    if (nascimento.value.trim() === '') {
     res.innerHTML = `[ERRO] Por favor informe sua data d nascimento`
     res.style.color = `red`
     return
    }
    
    let nasc = Number(nascimento.value) 
    let difanos = anoatual - nasc
    let diastotais = difanos * 365
    let resto = diastotais % 365
    let meses = Math.floor(resto / 30)
    let dias = resto % 30
    
    // verifica se o ano de nascimento é valido
    if (nasc > anoatual) {
        res.innerHTML = `Por favor digite uma data valida!`
    } else {
        res.innerHTML = `Voce viveu ${difanos} anos, ${meses} meses e ${dias} dias!`
    }
    
}