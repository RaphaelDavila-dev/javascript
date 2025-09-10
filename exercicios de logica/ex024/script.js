function calcular() {
    let velocidade = document.getElementById('txtv')
    let tempo = document.getElementById('txtt')
    let res = document.getElementById('res')
    
    // verifica se os valores foram preenchidos
    if (velocidade.value.trim() === '' || tempo.value.trim() === '') {
     res.innerHTML = `[ERRO] Por favor informe os dados requisitados!`
     res.style.color = `red`
     return
    }
    
    let vm = Number(velocidade.value)
    let t = Number(tempo.value)
    let distancia = vm * t
    let litrosusados = distancia / 12
    
    res.innerHTML = `Em ${t.toFixed(2)} horas de viagem a uma velocidade media de ${vm.toFixed(2)} Km/h foi percorrida uma distancia de ${distancia.toFixed(2)} Km e foram utilizados ${litrosusados.toFixed(2)} litros de gasolina!`
}