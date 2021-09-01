var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var hora = new Date().getHours()

function carregar() {
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia  
        img.src = 'foto-manha.png'
        document.body.style.backgroundColor = '#bfd5e0'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.backgroundColor = '#e5863f'
    } else {
        // boa noite
        img.src = 'foto-noite.png'
        document.body.style.backgroundColor = '#122142'
    }
}