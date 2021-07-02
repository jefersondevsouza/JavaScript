function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano)
    {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var fase = ''
        var siglaGenero = ''
        if(idade >=0 && idade < 10)
        {
            fase = 'bebe'
        }
        else if(idade < 21)
        {
            fase = 'jovem'
        }
        else if(idade < 50)
        {
            fase = 'adulto'
        }
        else
        {
            fase = 'idoso'
        }

        if(fsex[0].checked)
        {
            genero = 'Homem'
            siglaGenero = 'm'
        }
        else if(fsex[1].checked)
        {
            genero = 'Mulher'
            siglaGenero = 'f'
        }

         img.setAttribute('src', `imagens/foto-${fase}-${siglaGenero}.png`)
        //img.setAttribute('src', 'imagens\foto-adulto-m.png')
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}