function gerarTabuada()
{
    let txtNumero = window.document.getElementById('txtNumero')
    let tabuada = window.document.getElementById("sel")

    if(txtNumero.value === '')
    {
        window.alert("Por favor, digite um número!")
    }
    else
    {
        let numero = parseInt(txtNumero.value)
        tabuada.innerHTML = ''
        for(let i = 0; i <= 10; i++)
        {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }
}