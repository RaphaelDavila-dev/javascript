function sortear() {
    let numero = Math.floor(Math.random() * 101)
    let res = document.getElementById('res')

    res.innerHTML = `O numero sorteado é: ${numero}`
}