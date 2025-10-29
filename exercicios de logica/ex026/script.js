function verificar() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num.value.trim() === '') {
        res.innerHTML = '[ERRO] Por favor digite um numero' 
    }
    
    let n = num.value

    res.innerHTML = `o numero é: ${n}`
}