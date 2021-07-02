function contar()
{
    var inic = window.document.getElementById('txtInic')
    var fim = window.document.getElementById("txtFim")
    var passo = window.document.getElementById("txtPasso")

    var res = window.document.querySelector("div#res")

    var i = parseInt(inic.value)
    var incremento = parseInt(passo.value.toString())
    while(i < parseInt(fim.value))
    {
        res.innerHTML = `${res.innerHTML} => ${i} &#128073;`
        i = i + incremento
        //i++
    }


    res.innerHTML = `${res.innerHTML} => Fim &#127937;`  
}