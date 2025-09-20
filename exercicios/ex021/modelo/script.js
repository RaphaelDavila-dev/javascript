let num = document.getElementById('txtn')
let lista = document.querySelector('select#numlist')
let res = document.getElementById('res')
let valores = []

function innumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else {
    return false
   }
}

function inlista(n , l) {
   if (l.indexOf(Number(n)) != -1) {
    return true
   } else {
    return false
   }
}

function adicionar() {
    // verifica se os valores foram preenchidos
    if (innumero(num.value) && !inlista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        alert(`Valor invalido ou ja encontrado!`)
    }

    num.value = ''
    num.focus()
}

function finalizar() {
   
    if (valores.length === 0) {
        alert(`Por favor adicione valores na caixa indicada!`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        // verfica o menor, o maior, a soma e a media dos valores
        for(let pos in valores ) {
            soma += valores[pos]

            media += valores[pos] / valores.length

           if (valores[pos] > maior) {
             maior = valores[pos]
           }
           if (valores[pos] < menor) {
             menor = valores[pos]
           }
        }
    
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} elementos!</p>`
        res.innerHTML += `<p> O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores resulta em ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores resulta em ${media.toFixed(2)}.</p>`
    }
}