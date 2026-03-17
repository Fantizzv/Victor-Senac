let saldo = 200;

const $inputSaque = document.getElementById('valorDoSaque');
const $displaySaldo = document.getElementById('saldo');
const $displayMensagem = document.getElementById('mensagem');


$displaySaldo.innerHTML = saldo;

function realizarSaque() {
  const valorASacar = Math.abs(Number($inputSaque.value));

  $inputSaque.value = ""; /*Limpar input de números*/

  if (isNaN(valorASacar) > saldo) {
    $displayMensagem.innerHTML = "Saldo insuficiente, seu saldo é de R$" + saldo + ".";
    return
  }

  if (valorASacar > saldo) {
    $displayMensagem.innerHTML = "Não tem saldo.";
    return
  }
  
  saldo = saldo - valorASacar.toFixed(2);
  $displaySaldo.innerHTML = saldo;

  $displayMensagem.innerHTML = "Saque realizado, " + "foram descontados R$" + valorASacar + " do seu saldo.";
    
}

