function calcular(){
    let a = document.getElementById('txtn1')
    let b = document.getElementById('txtn2')
    let c = document.getElementById('txtn3')
    let res = document.getElementById('res')
    let A = Number(a.value)
    let B = Number(b.value)
    let C = Number(c.value)

    if(a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
       res.innerHTML = `[ERRO] Por favor digite algum numero nas 3 caixas acima!`

    } else { 
        let soma = A + B
        if (soma < C) {
            res.innerHTML = `A soma entre ${A} e ${B} é menor que ${C}`
        } else if(soma > C) {
            res.innerHTML = `A soma entre ${A} e ${B} é maior que ${C}`
        } else {
            res.innerHTML = `A soma entre ${A} e ${B} é igual a ${C}`
        }
        
    }
}