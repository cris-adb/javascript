function contar() {
    var inici = Number(document.querySelector('input#inic').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#res')


    for (var i = inici; i <= fim; i += passo) {
        res.innerHTML += `<p> toma o resultado ${i} </p>`
    }

}