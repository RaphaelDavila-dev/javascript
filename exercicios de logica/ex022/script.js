function calcular() {
    let dividendo = document.getElementById('txtd')
    let divisor = document.getElementById('txtd2')
    let res = document.querySelector('div#res')

    let dividendov = Number(dividendo.value)
    let divisorv = Number(divisor.value)
    
    // verifica se os valores foram preenchidos
    if (dividendo.value.trim() === '' || divisor.value.trim() === '') {
      res.innerHTML = `[ERRO] Por favor digite os valores indicados!`
      res.style.color = `red`
      return
    }
    
    // verficia se o divisor é valido
    if (divisorv === 0) {
      res.innerHTML = `[ERRO] Não é possivel um divisor 0!`
      res.style.color = `red`
      return
    }

    let divisão = dividendov / divisorv
    let resto = dividendov % divisorv

    res.innerHTML = `A divisão de ${dividendov} e ${divisorv} resultada no quoeficiente é ${divisão.toFixed(2)} e tem resto ${resto.toFixed(2)}`
    res.style.color = `black`
}