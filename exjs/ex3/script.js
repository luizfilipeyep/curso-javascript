var btn = document.getElementById('btn')
btn.addEventListener('click', verificar)

function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img') // cria um elemento <img>
        img.setAttribute('id', 'foto') // adiciona o atributo id com "foto"

        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            }
        } else {
            gênero = 'Mulher'
            
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else {
                // Adulto
                img.setAttribute('src', 'adulto-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // acrescenta o elemento da variável img a res
    }
}