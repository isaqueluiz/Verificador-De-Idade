function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value)> ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancaHomen.png')
            } else if (idade >= 10 && idade <21){
                //Jovem
                img.setAttribute('src', 'jovemHomen.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'AdultoHomen.png')
            } else {
                // Idoso
                img.setAttribute('src', 'IdosoHomen.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancaMulher.png')
            } else if (idade >= 10 && idade <21){
                //Jovem
                img.setAttribute('src', 'JovemMulher.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'AdultoMulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'IdosaMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}