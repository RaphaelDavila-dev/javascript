  function calcular() {
  let res = document.getElementById('res')
  let valorcampo = document.getElementById('txtv')
  if (valorcampo.value.length === 0) {
    res.innerHTML = `[ERRO] Por favor digite um numero!`
    return
  } else {
    let valor = Number(valorcampo.value)
    let v = valor * 1.05
    res.innerHTML = `o acrescimo de 5% de ${valor} resulta em ${v}`
  }
}