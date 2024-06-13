/* 3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas. */
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 4;
var coluna = 1;
var y = 0;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = parseFloat(teclado("Digite o nome que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
        y + minhaMatriz[z][x];
    }
}
console.log(minhaMatriz);
