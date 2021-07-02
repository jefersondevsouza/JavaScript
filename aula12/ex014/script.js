function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12)
    {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        //bom dia
    }
    else if(hora >= 12 && hora <= 18)
    {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
        //boa tarde
    }
    else
    {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
        //boa noite
    }
}


