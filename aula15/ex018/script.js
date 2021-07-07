let numeros = []

function adicionarNumero()
{
    let txtNumero = window.document.getElementById('txtNumero')

    if(txtNumero.value === '')
    {
        window.alert("Por favor, digite um número!")
    }
    else
    {
        let num = parseInt(txtNumero.value)
        if(!(num >= 1 && num <= 100))
        {
            window.alert("Informe um número entre 1 e 100!")
        }
        else
        {
            validarAdicionarNumero(num)
        }
    }
}

function finalizar()
{
    if(numeros.length == 0)
    {
        window.alert("Adicione valores antes de finalizar!")
    }
    else
    {
        let res = document.getElementById("res")
        res.innerHTML += `<p>Ao todo temos ${numeros.length} número cadastrados.`
        numeros.sort()

        res.innerHTML += `<p>O maior valor informado foi ${numeros[numeros.length - 1]}.`

        res.innerHTML += `<p>O menor valor informado foi ${numeros[0]}.`

        let soma = 0
        numeros.forEach(element => { soma += element });

        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`

        res.innerHTML += `<p>A média dos valores digitados é ${soma / numeros.length}.`
    }

    numeros = []
}

function validarAdicionarNumero(num)
{
    if(numeros.indexOf(num) == -1)
    {
        guardarNumeroArray(num)
    }
    else
    {
        window.alert(`O valor ${num} já foi adicionado!`)
    }
}

function guardarNumeroArray(num)
{
    let selNumeros = window.document.getElementById("sel")

    if(numeros.length == 0)
        selNumeros.innerHTML = ''

    numeros.push(num);
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado`
    item.value = `tab${num}`
    selNumeros.appendChild(item)
}
