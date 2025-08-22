function verificar() {
    let n = document.getElementById('txtn1')
    let res = document.getElementById('res')
    let N = Number(n.value)

    if (n.value.trim() === '') {
     res.innerHTML = `[ERRO] Por favor digite um numero na caixa indicada`
     res.style.color = `red`
     return
    } else {
     let ant = N - 1
     let suse = N + 1
     res.innerHTML = `O antecessor de ${N} é: ${ant} <br> O sucessor de ${N} é: ${suse}`
     res.style.color = `black`
    }
}