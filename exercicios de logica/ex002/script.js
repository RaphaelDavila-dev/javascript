function verificar() {
 let n = document.getElementById('txtn')
 let res = document.getElementById('res')

 if(n.value.trim() === "") {
   res.innerHTML = `[ERRO] Por favor digite um numero`
   res.style.color = 'red' 
   return

   }
   
   let N = Number(n.value)

   if (N < 0){
    res.innerHTML = `${N} é um numero negativo`
    res.style.color = 'black'

 } else if (N > 0) {
    res.innerHTML = `${N} é um numero positivo`
    res.style.color = 'black'

 } else {
    res.innerHTML = `${N} é igual a zero`
    res.style.color = 'black'

 } 

 if(Math.abs(N % 2) === 0 ) {
   res.innerHTML = `${res.innerHTML} e par!`

 } else if (Math.abs(N % 2) === 1) {
    res.innerHTML = `${res.innerHTML} e impar!`

 }
}  