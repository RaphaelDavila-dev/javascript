function calcular () {
  let lado1 = document.getElementById('txtl1')
  let lado2 = document.getElementById('txtl2')
  let lado3 = document.getElementById('txtl3') 
  let res = document.querySelector('div#res')
  
  // verifica se todos os valores foram preenchidos
  if (lado1.value.trim() === '' || lado2.value.trim() === '' || lado3.value.trim() === '') {
    res.innerHTML = `[ERRO] Por favor digite todos os dados solicidatos!`
    res.style.color = `red`
    return
  } 

  let l1 = Number(lado1.value)
  let l2 = Number(lado2.value)
  let l3 = Number(lado3.value)

  // verifica se é um triangulo valido
  if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
    res.innerHTML = `É um triangulo!`
    res.style.color = `black`

    //caso seja equilatero
    if (l1 === l2 && l2 === l3) {
    res.innerHTML = `${res.innerHTML} e é equilatero`
    
    // caso seja isosceles
  } else if (l1 === l2 || l2 === l3 || l1 === l3) {
    res.innerHTML = `${res.innerHTML} e é isosceles`
    
    // caso seja escaleno
  } else {
    res.innerHTML = `${res.innerHTML} e é escaleno`

  }

  // caso não seja um triangulo valido
  } else {
    res.innerHTML = `Os valores informados não foram um triangulo!`
  }
 }