function calcular() {
 let anos = 0
 let res = document.getElementById('res')

 let sarah = 1.10
 let francisco = 1.50

 while (francisco <= sarah) {
   francisco += 0.02
   sarah += 0.03
   anos ++
 }

 res.innerHTML = `Francisco sera maior que Sarah em ${anos}`
}