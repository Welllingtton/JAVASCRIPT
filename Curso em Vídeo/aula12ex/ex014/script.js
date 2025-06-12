function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
                //BOM DIA
        img.src = 'foto_manha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'foto_tarde.jpg'
    } else {
        //BOA NOITE
        img.src = 'foto_noite.jpg'
    }
}