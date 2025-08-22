function calcular() {
    let a = document.getElementById('txtn1')
    let b = document.getElementById('txtn2')
    let res = document.getElementById('res')

    if(a.value.trim() === '' || b.value.trim() === '') {
     res.innerHTML = `[ERRO!] Por favor dite algum numero nas caixas indicadas!`
     res.style.color = `red`
     return
    }
    let A = Number(a.value)
    let B = Number(b.value)

    if (A === B) {
      let soma = A + B
      res.innerHTML = `Numeros iguais! soma executada, resultado: ${soma}`
      res.style.color = `black`

    } else if (A !== B) {
      let mult = A * B
      res.innerHTML = `Numeros diferentes! multiplicação executada, resultado: ${mult}`
      res.style.color = `black`

    }
}