const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tarefas = [];

function mostrarMenu() {
  console.log("\n=== MENU ===");
  console.log("1. Listar tarefas");
  console.log("2. Adicionar tarefa");
  console.log("3. Concluir tarefa");
  console.log("4. Remover tarefa");
  console.log("0. Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        listarTarefas();
        break;
      case "2":
        adicionarTarefa();
        break;
      case "3":
        concluirTarefa();
        break;
      case "4":
        removerTarefa();
        break;
      case "0":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        mostrarMenu();
    }
  });
}

function listarTarefas() {
  console.log("\n📋 Tarefas:");
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa.");
  } else {
    tarefas.forEach((tarefa, index) => {
      console.log(
        `${index + 1}. [${tarefa.concluida ? "✔" : " "}] ${tarefa.nome}`
      );
    });
  }
  mostrarMenu();
}

function adicionarTarefa() {
  rl.question("Digite a nova tarefa: ", (nome) => {
    tarefas.push({ nome, concluida: false });
    console.log("Tarefa adicionada!");
    mostrarMenu();
  });
}

function concluirTarefa() {
  rl.question("Número da tarefa para concluir: ", (num) => {
    let index = num - 1;

    if (tarefas[index]) {
      tarefas[index].concluida = true;
      console.log("Tarefa concluída!");
    } else {
      console.log("Tarefa inválida!");
    }

    mostrarMenu();
  });
}

function removerTarefa() {
  rl.question("Número da tarefa para remover: ", (num) => {
    let index = num - 1;

    if (tarefas[index]) {
      tarefas.splice(index, 1);
      console.log("Tarefa removida!");
    } else {
      console.log("Tarefa inválida!");
    }

    mostrarMenu();
  });
}

mostrarMenu();