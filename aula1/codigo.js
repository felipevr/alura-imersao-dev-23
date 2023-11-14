var valorEmDolar = 30;
var cotacaoDolarReal = 4.92;
var cotacaoDolarYen = 151.65 ;

var valorEmReal = valorEmDolar * cotacaoDolarReal;

var texto = 'R$ ' + valorEmReal;

//alert(texto)

function log(texto) {

    document.getElementById('iada').innerHTML += texto;

}

log('Valor em Dolar: <br />')
log('US$ ' + valorEmDolar)

log('<br/><br/>')

log('Valor em Real: <br />')
log(texto)

log('<br/><br/>')

var valorEmYen = valorEmDolar * cotacaoDolarYen;

var texto = '¥ ' + valorEmYen;

log('Valor em Iene (Japonês): <br />')
log(texto)

