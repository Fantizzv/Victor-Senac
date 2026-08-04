const menu = require('./menu');
const moduloClientes = require('./clientes');

const minhasOpcoes = [
      {
        texto: "Cadastrar Cliente",
        acao: (rs) => {
            // Lógica Linear: Pergunta por pergunta, atribuídas diretamente a variáveis!
            const nome = rs.question("Digite o Nome: ");
            const email = rs.question("Digite o Email: ");
            const cat = rs.question("Categoria (VIP/COMUM): ");

            const novoCliente = moduloClientes.criarCliente(nome, email, cat);
            moduloClientes.cadastrarCliente(novoCliente);
            
            console.log("\n✅ Cliente cadastrado com sucesso!");
            
            // Note que a antiga chamada `retornar();` sumiu.
        }
    },
    {
        texto: "Listar Clientes",
        acao: () => { // Função sem parâmetros
            const lista = moduloClientes.listarClientes();
            console.log("\n--- LISTA DE CLIENTES ---");
            console.table(lista);
            
            // A antiga chamada `retornar();` também foi removida daqui!
        }
    }
]
// Criamos a variável antes do array de opções
const tituloSistema = "Gestao Comercial Senac";

// E chamamos ela para inicializar a aplicação no final do arquivo
menu.criarMenu(tituloSistema, minhasOpcoes);