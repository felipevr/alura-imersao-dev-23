
function log(texto) {

    document.getElementById('iada').innerHTML += texto;

}


var numeroSecreto = parseInt(Math.random() * 1000)+1;


log('<br/><br/>');

var tentativas = 0;
const maxTentativas  = 10;

while (tentativas < maxTentativas) {

    var retorno = prompt('Digite um número entre 1 e 1000.')

    if (! (retorno >= 1 && retorno <= 1000) ) {
        alert('Você não digitou um número válido!');
        continue;
    }

    log('<br/>');

    log('Você informou o número ' + retorno);

    if (retorno == numeroSecreto) {
        alert('Você acertou! Parabéns!');

        
        log('<h3>CAMPEÃO! </h3> ');

        break;
    }
    else if (retorno < numeroSecreto) {
        alert('Você informou um número menor!');
    }
    else if (retorno > numeroSecreto) {
        alert('Você informou um número maior!');
    }

    tentativas += 1;

}

if (tentativas == maxTentativas) {
    alert('Suas chances acabaram! Você perdeu!');

}

log('<br/>O número secreto era ' + numeroSecreto);