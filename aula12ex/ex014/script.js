function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 8 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.scr = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde 
        img.scr = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.scr = 'noite.png'
        document.body.style.background = '#515154'

    }
}
