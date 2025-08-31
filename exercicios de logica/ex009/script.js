function calcular() {
    let p = document.getElementById('txtp')
    let a = document.getElementById('txta')
    let res = document.querySelector('div#res')
    let imc = ''

    // verifica se os dados foram preenchidos corretamente
    if (p.value.trim() === '' || a.value.trim() === '') {
     res.innerHTML = `[ERRO] Por favor digite os valores indicados!`
    res.style.color = `red`
    return 
    }
    
    let peso = Number(p.value)
    let altura = Number(a.value)
    let cal = peso / (altura ** 2)

    if (altura === 0) {
        res.innerHTML = `[ERRO] Altura invalida!`
        res.style.color = `red`

    } else if (cal < 18.5) {
        imc = 'Abaixo do peso!'
        res.innerHTML = `${imc}`
        res.style.color = `yellow`

    } else if (cal >= 18.5 && cal <= 24.9) {
        imc = 'Peso ideal!'
        res.innerHTML = `${imc}`
        res.style.color = `blue`

    } else if (cal >= 25 && cal <= 29.9) {
        imc = 'Levemente acima do peso!'
        res.innerHTML = `${imc}`
        res.style.color = `orange`

    } else if (cal >=30 && cal <= 34.9) {
        imc = 'Obesidade grau 1!'
        res.innerHTML = `${imc}`
        res.style.color = `lightcoral`

    } else if (cal >= 35 && cal <=39.9) {
        imc = 'Obesidade grau 2 (severa)!'
        res.innerHTML = `${imc}`
        res.style.color = `red`

    } else {
        imc = 'Obesidade grau 3 (morbida)!'
        res.innerHTML = `${imc}`
        res.style.color = `violet`

    }
 
}  