function calcular() {
    let horasa = document.getElementById('txth')
    let aulasmes = document.getElementById('txta')
    let inss = document.getElementById('txti')
    let res = document.querySelector('div#res')
    
    // verifica se todos os dados foram preenchidos
    if (horasa.value.trim() === '' || aulasmes.value.trim() === '' || inss.value.trim() === '') {
      res.innerHTML = `[ERRO] Por favor digite todas as informações requisitadas!`
      res.style.color = `red`
      return
    }
    
    // transforma os dados em numeros
    let horasv = Number(horasa.value)
    let aulasv = Number(aulasmes.value)
    let inssv = Number(inss.value)

    // executa os calculos
    let salariobruto = horasv * aulasv
    let desconto = salariobruto * (inssv / 100)
    let salarioliquido = salariobruto - desconto

    res.innerHTML = `Seu salario é de ${salarioliquido.toFixed(2)}`   
}