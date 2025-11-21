//estamos executando o js no node pelo terminal, por isso precisamos abrir com console.log, diferente do navegador que iriamos mostrar com display.document.write
var vel = 50.5
console.log(`A velocidade do seu carro é ${vel}km/h`)
    if (vel > 60) { //condição composta
        console.log(`Você ultrapassou a velocidade máxima permitida. MULTADO!`)
    }
console.log(`Dirija sempre usando cinto de segurança!`)