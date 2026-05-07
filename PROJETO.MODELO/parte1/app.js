const financeiro = require('./financeiro');

function imprimircumpo(cliente, valorfinal) {
    console.log("loja moda senac");
    console.log("cliente", cliente);
    console.log("total a pagar:", valorfinal);
}

financeiro.calcularTotalComDesconto(200, 10);

const cliente = "nome de alguem";
const valorfinal = 10;
imprimircumpo("outra pessoa", 100);