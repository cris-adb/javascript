function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 0 && hora < 12) {
            img.src = 'manha.png'
            document.body.style.background = '#e2cd9f'
        // bom dia
        } else if (hora >= 12 && hora <= 18) {
            img.src = 'tarde.png'
            document.body.style.background = '#b9846f'
        // boa tarde
        } else {
            img.src = 'noite.png'
            document.body.style.background = '#322840'
            // boa noite
        }
}
