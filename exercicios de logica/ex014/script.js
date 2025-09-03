function inverter() {
    let n1 = document.getElementById('txtn1')
    let n2 = document.getElementById('txtn2')
    let res =document.querySelector('div#res')

    if (n1.value.trim() === '' || n2.value.trim() === '') {
      res.innerHTML = `[ERRO] Por favor digite os valores indicados acima!`
      res.style.color = `red`
      return
    } else {
    let n1v = Number(n2.value)
    let n2v = Number(n1.value)

    res.innerHTML = `numero1 = ${n1v} e numero2 = ${n2v}`
    res.style.color = `black`
    }
}