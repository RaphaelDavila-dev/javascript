function calcular() {
    let prit = document.querySelector('input#txtp')
    let segt = document.querySelector('input#txts')
    let tert = document.querySelector('input#txtt')
    let res = document.getElementById('res')
    
    let pritv = Number(prit.value)
    let segtv = Number(segt.value)
    let tertv = Number(tert.value)
    let media = (pritv + segtv + tertv) / 3
    

    //verifica se todos os valores foram preenchidos
    if (prit.value.trim() === '' || segt.value.trim() === '' || tert.value.trim() === '') {
      res.innerHTML = `[ERRO] Por favor informe suas notas!`
      res.style.color = `red`
      return

    } else {
      res.innerHTML = `Sua media é ${media.toFixed(2)}`
    }
}      