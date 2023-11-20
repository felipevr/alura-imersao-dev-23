
function log(texto) {

    document.getElementById('iada').innerHTML += texto;

}


log('<br/><br/>');

function Jogador(nome) {
    this.nome = nome;
    this.vitorias = 0;
    this.derrotas = 0;
    this.empates = 0;
    this.pontos = 0;
}
Jogador.prototype.toString = function asd() {
    return `${this.nome}`;
};

var jogadores = [];


adicionarJogador('Paulo');
adicionarJogador('Rafa');
adicionarJogador('Renato');
adicionarJogador('Felipe');

function adicionarVitoria(e, jogadori) {
    var linha = e.parentElement.parentElement;
    var jogador = jogadores[jogadori];
    jogador.vitorias++;
    jogador.pontos += 3;
    linha.innerHTML = geraHTML(jogador, jogadori);
}

function adicionarEmpate(e, jogadori) {
    var linha = e.parentElement.parentElement;
    var jogador = jogadores[jogadori];
    jogador.empates++;
    jogador.pontos += 1;
    linha.innerHTML = geraHTML(jogador, jogadori);
}

function adicionarDerrota(e, jogadori) {
    var linha = e.parentElement.parentElement;
    var jogador = jogadores[jogadori];
    jogador.derrotas++;
    linha.innerHTML = geraHTML(jogador, jogadori);
}


function adicionarJogador(nome) {
    if ( nome == undefined ) {
        nome = document.getElementById('nome').value;
    }
    var jogador = new Jogador(nome);

    jogadores.push(jogador);
    //console.log(jogadores)
    
    var elTabela = document.getElementById('tabelaJogadores');
    
    outroHTML = geraHTML(jogador, jogadores.length-1);
    
    //template.attributes['style'] = '';
    elTabela.insertAdjacentHTML('beforeEnd', outroHTML);


}

function geraHTML(jogador, index) {
    var template = document.getElementById('template');
    var outroHTML = template.innerHTML;
    
    outroHTML = outroHTML.replace('%NOME%', jogador.nome);
    outroHTML = outroHTML.replace('%vitorias%', jogador.vitorias);
    outroHTML = outroHTML.replace('%derrotas%', jogador.derrotas);
    outroHTML = outroHTML.replace('%empates%', jogador.empates);
    outroHTML = outroHTML.replace('%pontos%', jogador.pontos);
    outroHTML = outroHTML.replaceAll('__INDICE__', index);

    return outroHTML;
}