const clientes = require('./clientes');

const cliente1 = clientes.criarCliente(
    "Victor Fanti",
    "victorfanti670@gmail.com",
    "VIP",
);

const cliente2 = clientes.criarCliente(
    "Victor Fanti2",
    "antoniettivictor@hotmail.com",
    "COMUM"
)
clientes.cadastrarCliente(cliente1);
clientes.cadastrarCliente(cliente2);

const listaClientes = clientes.listarClientes ();

console.table(listaClientes);