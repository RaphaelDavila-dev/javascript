function alinhar() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let num3 = document.getElementById('num3')
    let res = document.querySelector('div#res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)

    if (num1.value.trim() === '' || num2.value.trim() === '' || num3.value.trim() === '') {
        //verifica se há valores dentro de cada caixa 
     res.innerHTML = `[ERRO] Por favor verfique os valores digitados`
     res.style.color = `red`
     return
    } 

    
    // caso todos sejam iguais
    if (n1 === n2 && n2 === n3) {
        res.innerHTML = `A ordem é: ${n1}, ${n2} e ${n3}`

     // caso n1 seja maior
    } else if (n1 >= n2 && n1 >= n3) {
      
        if (n2 >= n3) {
         res.innerHTML = `A ordem é: ${n1}, ${n2} e ${n3}`
       
        } else {
          res.innerHTML = `A ordem é: ${n1}, ${n3} e ${n2}`

    }

    // caso n2 seja maior
    }  else if (n2 >= n1 && n2 >= n3) {

      if (n1 >= n3) {
       res.innerHTML = `A ordem é: ${n2}, ${n1} e ${n3}`

      } else {
        res.innerHTML = `A ordem é: ${n2}, ${n3} e ${n1}`

      } 
      
    // caso n3 seja maior  
    } else {

      if (n2 >= n1) {
       res.innerHTML = `A ordem é: ${n3}, ${n2} e ${n1}`

      } else {
        res.innerHTML = `A ordem é: ${n3}, ${n1} e ${n2}`
      }
    }
}    
