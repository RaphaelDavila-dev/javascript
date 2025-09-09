function converter() {
    let temp = document.getElementById('txtt')
    let res = document.getElementById('res')
    let tempf = Number(temp.value)
    
    // verifica se a temperatura foi informada
    if (temp.value.trim() === '') {
      res.innerHTML = `[ERRO] Por favor digite uma temperatura em graus Fahrenheit`
      res.style.color = `red`
      return
    }
    
    // verifica se a temperatura existe
    if (tempf < -459.67) {
      res.innerHTML = `Essa temperatura não existe pois excede o minimo de temperatura possivel!`
      res.style.color = `red`
      return

    }  
      // efetua o calculo
      let tempcal = (5 * (tempf-32) / 9)
      res.innerHTML = `A temperatura de ${tempf.toFixed(2)} em F corresponde á ${tempcal.toFixed(2)} graus celsius!`
      res.style.color = `black`
     
}