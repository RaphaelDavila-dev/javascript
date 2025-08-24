function calcular() {
    let sal = document.getElementById('txts')
    let res = document.getElementById('res') 

    if (sal.value.length === 0) {
      res.innerHTML = `Voce é desempregado?`
    } else {
        let salm = Number(sal.value)
        let qsm = salm / 1293.20
        res.innerHTML = `Voce recebe ${qsm.toFixed(2)} salarios minimos!`
    }
}