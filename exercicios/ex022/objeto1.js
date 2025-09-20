let amigo = {nome:`Raphael`,
    sexo:`m`,
    peso:76,
    engordar(p=0) {
        console.log(`Engordou`)
      this.peso += p
    }}
amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}`)