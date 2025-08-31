function verificar() {
    let t1 = document.getElementById('txt1')
    let t2 = document.getElementById('txt2')
    let res = document.getElementById('res')
    
    if (t1.value.trim() === '' || t2.value.trim() === '') {
        //verifica se tem valores nos inputs
       res.innerHTML = `[ERRO] Por favor digite os valores para o teste`
       res.style.color = `red`
       return
    }
    
    let v1 = t1.value.trim().toLowerCase()
    let v2 = t2.value.trim().toLowerCase()
    let booleano 

    if (v1 === 'true' && v2 === 'true') {
        // verifica se anbos são verdadeiros
      booleano = true
      res.innerHTML = `valor valido! sendo o mesmo: ${booleano}`
    } else if (v1 === 'false' && v2 === 'false') {
        // verifica se anbos são falsos
      booleano = false
      res.innerHTML = `valor valido! sendo o mesmo: ${booleano}`
    } else {
        // verifica valores invalidos
        res.innerHTML = `valor digitado invalido, por favor digite dados validos`
    }

    if (v1 != v2) {
        res.innerHTML = `${res.innerHTML} <br> e os valores são diferentes`
    } else {
        res.innerHTML = `${res.innerHTML} <br> e os valores são iguais`
    }
}