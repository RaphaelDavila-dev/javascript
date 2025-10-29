function somar() {
  let num1 = document.getElementById('txtn1')
  let num2 = document.getElementById('txtn2')
  let res = document.querySelector('div#res')

  if(num1.value.trim() === '' || num2.value.trim() === '') {
   res.innerHTML = '[ERRO] Por favor digite valores nas caixas indicadas!'
   res.style.color = 'red'
   return
  } 
   
  let n1 = Number(num1.value)
  let n2 = Number(num2.value)
  let soma = (n1 + n2)

  res.innerHTML = `a soma resulta em ${soma}`
  res.style.color = `black`
}