const financeiro = require('./financeiro')
const clientes = require('./clientes')

function imprimirCupom(cliente, valorfinal) {
    console.log("loja moda senac")
    console.log("cliente", cliente)
    console.log("total a pagar:", valorfinal)
}

 financeiro.calcularTotalComDesconto(200, 10)

 const cliente1 = listaClientes.criarClientes(
    "Adriano Anschau",
    "adriano@email.com",
    "VIP"
 )
 listaClientes.cadastrarCliente(cliente1)

 imprimirCupom(cliente1.nome, valorfinal)