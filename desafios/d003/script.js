function contar() {
    let inic = document.querySelector('input#inic')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if  (inic.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
    }

    for (var i = inic; i <= fim; i += passo) {
        res.innerHTML += `&#x1F449 ${i}`
    }
    
}