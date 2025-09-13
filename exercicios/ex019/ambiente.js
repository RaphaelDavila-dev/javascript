let num = [5 , 8 , 3 , 9 , 1]
num.push(2)


console.log(num)
console.log(num.length)
console.log(num[2])

let pos = num.indexOf(9)
if (pos === -1) {
    console.log(`não encontrado`)
} else {
    console.log(`a posição é ${pos}`)
}