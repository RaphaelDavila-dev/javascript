function calcular() {
    let bi1 = document.querySelector('input#bi1')
    let bi2 = document.querySelector('input#bi2')
    let bi3 = document.querySelector('input#bi3')
    let bi4 = document.querySelector('input#bi4')
    let nome = document.querySelector('input#txtn')
    let res = document.getElementById('res')

    // verifica se todos os dados foram preenchidos
    if (bi1.value.trim() === '' || bi2.value.trim() === '' || bi3.value.trim() === '' || bi4.value.trim() === '' || nome.value.trim() === '') {
       res.innerHTML = `[ERRO] Por favor preencha todos os dados!`
       res.style.color = `red`
       return
    } 
    
    // valores em numero
    let n1 = Number(bi1.value)
    let n2 = Number(bi2.value)
    let n3 = Number(bi3.value)
    let n4 = Number(bi4.value)
    let media = (n1 + n2 + n3 + n4) / 4 

    if (media >= 7) {
        res.innerHTML = `${nome.value} sua media é ${media.toFixed(2)} voce está aprovado!`
    } else {
        res.innerHTML = `${nome.value} sua media é ${media.toFixed(2)} voce está reprovado!`
    }
}