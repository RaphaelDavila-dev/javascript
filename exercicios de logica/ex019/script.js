function tabuada() {
    let num = document.querySelector('input#txtt')
    let tab = document.querySelector('select#seltab')

    if (num.value.trim() === '') {
     tab.innerHTML = `[ERRO] Por favor digite um numero na caixa indicada!`
     tab.style.color = `red`
     return

    } else {
     let n = Number(num.value)
     let c = 1
     
     tab.innerHTML = ``
     tab.style.color = `black`

     while (c <= 10) {
     let item = document.createElement('option')
     item.value = `tab${c}`
     item.text = `${n} x ${c} = ${n * c}`
     tab.appendChild(item)
     c++
     }
    }
}