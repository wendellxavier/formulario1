function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'foto/fotomanha.png'
        document.body.style.background = '#ezcd9f'
    }else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'foto/fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //noite
        img.src = 'foto/fotonoite.png' 
        document.body.style.background = '#515154'
    }
}