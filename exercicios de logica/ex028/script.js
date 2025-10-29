function calcular() {
    let bimestre1 = document.getElementById('txtb1')
    let bimestre2 = document.getElementById('txtb2')
    let bimestre3 = document.getElementById('txtb3')
    let bimestre4 = document.getElementById('txtb4')
    const res = document.querySelector('div#res')

    if (bimestre1.value.trim() === '' || bimestre2.value.trim() === '' || bimestre3.value.trim() === '' || bimestre4.value.trim() === '') {
        res.innerHTML = `[ERRO] Ditite todas as suas notas bimestrais!`
        return
    }
    
    let bi1 = Number(bimestre1.value)
    let bi2 = Number(bimestre2.value)
    let bi3 = Number(bimestre3.value)
    let bi4 = Number(bimestre4.value)

    let media = (bi1 + bi2 + bi3 + bi4) / 4

    res.innerHTML = `A media das notas é: ${media}`
}