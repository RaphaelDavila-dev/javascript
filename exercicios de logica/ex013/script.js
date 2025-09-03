function verificar() {
  let nome = document.getElementById('txtn')
  let idade = document.getElementById('txti')
  let res = document.querySelector('div#res')
  
  if (nome.value.trim() === '' || idade.value.trim() === '') {
    res.innerHTML = `[ERRO] Por favor preencha os dados corretamente!`
    res.style.color = `red`
    return

  } 

  let maioridade = Number(idade.value)

  if (maioridade <= 17 && maioridade > 0 ) {
   res.innerHTML = `${nome.value} voce possui ${maioridade} é menor de idade ainda, não pode dirigir!`
   res.style.color = `black`

    } else {
      res.innerHTML = `${nome.value} voce possui ${maioridade} é maior de idade, pode dirigir!`
      res.style.color = `black`  

    }
}