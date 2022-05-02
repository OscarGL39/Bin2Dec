function parrafos() {
    var infonumBien = document.getElementById('infonumBien')
    var infonum2Mal = document.getElementById('infonum2Mal')
    var numero = document.getElementById('numero').value
    var calcular = document.getElementById('calcular')
    calcular.innerHTML = parseInt(numero, 2);
    var ultimodigito = numero.charAt(numero.length - 1)
    if (numero == '') {
        calcular.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2Mal.innerHTML = 'Here is your decimal'
        infonumBien.innerHTML = ''
    } else {
        calcular.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999999) {
        infonumBien.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2Mal.innerHTML = ''
    }
    if (ultimodigito == '') {
        infonumBien.innerHTML = ''
        infonum2Mal.innerHTML = ''
    }
}