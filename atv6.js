/* 6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela. */
console.clear();
var minhaMatriz = [];
var teclado = require("prompt-sync")();
var linha = 4;
var coluna = 4;
for (var x = 0; x <= linha; x++) {
    minhaMatriz[x] = [];
    for (var i = 0; i <= coluna; i++) {
        minhaMatriz[x][i] = Math.floor(Math.random() * 10);
        var resultado = teclado("Digite o n\u00FAmero que vai estar no endereco [".concat(i, ", ").concat(x, "] da matriz: "));
    }
}
console.log(minhaMatriz);
