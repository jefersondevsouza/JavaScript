function contar()
{
    let txtInic = window.document.getElementById('txtInic')
    let txtFim = window.document.getElementById("txtFim")
    let txtPasso = window.document.getElementById("txtPasso")

    let res = window.document.querySelector("div#res")

    if(txtInic.value === '' || txtFim.value === '' || txtPasso.value === '')
    {
        res.innerHTML = `<p><strong>Impossível contar</strong>` 
    }
    else
    {
        let inicio = parseInt(txtInic.value)
        let fim = parseInt(txtFim.value)
        let incremento = parseInt(txtPasso.value.toString())

        if(incremento <= 0)
        {
            window.alert(`Passo inválido! Considerar passo 1.`)
            incremento = 1
        }

        res.innerHTML = "Contando <br>"

        let contador = inicio

        if(fim > inicio)
        {
            //contagem crescente
            while(contador < fim)
            {
                res.innerHTML = `${res.innerHTML} => ${contador} &#128073;`
                contador += incremento
            }
        }
        else
        {
            //contagem regressiva
            while(contador > fim)
            {
                res.innerHTML = `${res.innerHTML} => ${contador} &#128073;`
                contador -= incremento
            }
        }

        res.innerHTML = `${res.innerHTML} => &#127937;`  
    }   
}