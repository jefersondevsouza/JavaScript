let numeros = []
let res = document.getElementById("res")
let txtNumero = window.document.getElementById('txtNumero')

function adicionarNumero()
{
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
            if(numeros.indexOf(num) == -1)
            {
                guardarNumeroArray(num)
            }
            else
            {
                window.alert(`O valor ${num} já foi adicionado!`)
            }
        }
    }

    txtNumero.value = ''
    txtNumero.focus()
}

function finalizar()
{
    if(numeros.length == 0)
    {
        window.alert("Adicione valores antes de finalizar!")
    }
    else
    {
        numeros.sort()
        let menor = numeros[0]
        let maior = numeros[numeros.length - 1]
        let total = numeros.length
        let soma = 0
        numeros.forEach(element => { soma += element })
        let media = soma / total

        res.innerHTML += `<p>Ao todo temos ${total} número cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }

    numeros = []
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
    res.innerHTML = ''
}
