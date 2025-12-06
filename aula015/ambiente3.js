let bum = [1, 3, 5, 7, 9]

console.log(bum)

/* Só vale essa forma de sintaxe for para array */
for(let pos in bum ) {
    console.log(`A posição ${pos} tem o valor ${bum[pos]}`)
}

/* Usando indexOf podemos achar a posição do valor informado */
let valor = bum.indexOf(7)
    if (valor == -1) {
        console.log('O valor não foi encontrado')
    } else {
        console.log(`A posição do valor 7 é ${valor}`)
    }