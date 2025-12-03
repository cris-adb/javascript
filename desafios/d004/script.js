function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}

function calcular() {
    let prim = document.querySelector('input#txtprim')
    let segu = document.querySelector('input#txtsegun')
    let lista_operadores = document.getElementsByName('radop')
    let res = document.querySelector('div#res')

    if (prim.value.length == 0 || segu.value.length == 0) {
        window.alert('Por favor, digite um número!')
        } else {
            let o = ''
            for (let i = 0; i < lista_operadores.length; i++) {
                if (lista_operadores[i].checked) {
                    o = lista_operadores[i].value
                    break;
                }
            }
            if (o === '') {
                window.alert('Por favor, selecione uma operação!')
            } else {
            let p = Number(prim.value)
            let s = Number(segu.value)
            res.innerHTML = ''

            switch(o) {
                case '+':
                    res.innerHTML += `O resultado é: ${p} + ${s} = ${p + s}`
                    break;
                case '-':
                    res.innerHTML += `O resultado é: ${p} - ${s} = ${p - s}`
                    break;
                case '*':
                    res.innerHTML += `O resultado é: ${p} * ${s} = ${p * s}`
                    break;
                case '/':
                    if (s === 0 || p === 0) {
                        res.innerHTML = 'Erro: Não é possível dividir por zero. '
                    } else {
                        res.innerHTML += `O resultado é: ${p} / ${s} = ${p / s}`
                    }
                    break;
            }
        }
    }
}