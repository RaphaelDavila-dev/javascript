function calcular() {
    let valor = document.getElementById('txtv')
    let res = document.querySelector('div#res')
    let avista = document.getElementById('txtav')
    let cartao = document.getElementById('txtcv')
    let parc2x = document.getElementById('txt2x')
    let parcm2x = document.getElementById('txtm2x')

    if (valor.value.trim() === '' || (!avista.checked && !cartao.checked && !parc2x.checked && !parcm2x.checked)) {
      res.innerHTML = `[ERRO] Por favor selecione a forma de pagamente e(ou) o valor do produto solicitado`
      res.style.color = `red`
      return
    } 

    let v = Number(valor.value)
    
    if(v <= 0) {
      res.innerHTML = `[ERRO] Por favor digite um valor valido!`
      res.style.color = `red`

    } else if (avista.checked) {
      let preço = v - (0.15 * v)
      res.innerHTML = `O valor do pedido ficou ${preço.toLocaleString('pt-BR', {style: 'currency' , currency:'BRL'})} a vista ou pix`
      res.style.color = `black`

    } else if (cartao.checked) {
      let preço = v - (0.10 * v)
      res.innerHTML = `O valor do pedido ficou ${preço.toLocaleString('pt-BR', {style: 'currency' , currency:'BRL'})} no cartão`
      res.style.color = `black`

    } else if (parc2x.checked) {
      let preço = v 
      res.innerHTML = `O valor do pedido ficou ${preço.toLocaleString('pt-BR', {style: 'currency' , currency:'BRL'})} no cartão em duas vezes`
      res.style.color = `black`

    } else if (parcm2x.checked) {
      let preço = v + (0.10 * v)
      res.innerHTML = `O valor do pedido ficou ${preço.toLocaleString('pt-BR', {style: 'currency' , currency:'BRL'})} no cartão em tres ou mais parcelas`
      res.style.color = `black`

    }
  
}