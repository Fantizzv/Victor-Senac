let clicks = 0;
let multiplicador = 1; // ✅ começa em 1

let upgrades = {
  2: 0,
  5: 0,
  10: 0,
  25: 0,
  50: 0,
  100: 0
};

function clicar(event) {
  clicks += multiplicador;

  document.getElementById("contador").textContent =
    "Número de Cookies: " + clicks;

  // conquistas
  if (clicks >= 100) {
    const caixa1 = document.getElementById("caixa1");
    const texto = document.getElementById("textoCaixa1");

    texto.textContent = "Parabéns! Você alcançou 100 cliques!";
    caixa1.classList.add("desbloqueada");
  }

  if (clicks >= 500) {
    const caixa2 = document.getElementById("caixa2");
    const texto = document.getElementById("textoCaixa2");

    texto.textContent = "Continue assim! Você alcançou 500 cliques!";
    caixa2.classList.add("desbloqueada");
  }

  if (clicks >= 1000) {
    const caixa3 = document.getElementById("caixa3");
    const texto = document.getElementById("textoCaixa3");

    texto.textContent = "Não pare! Você alcançou 1000 cliques!";
    caixa3.classList.add("desbloqueada");
  }

  if (clicks >= 5000) {
    const caixa4 = document.getElementById("caixa4");
    const texto = document.getElementById("textoCaixa4");

    texto.textContent = "Quase lá! Você alcançou 5000 cliques!";
    caixa4.classList.add("desbloqueada");
  }

  if (clicks >= 10000) {
    const caixa5 = document.getElementById("caixa5");
    const texto = document.getElementById("textoCaixa5");

    texto.textContent = "Conquistas finalizadas! Você alcançou 10000 cliques!";
    caixa5.classList.add("desbloqueada");
  }

  // efeito visual
  const cookie = document.createElement("img");
  cookie.src = "image.png";
  cookie.classList.add("cookie-voando");

  cookie.style.left = event.clientX + "px";
  cookie.style.top = event.clientY + "px";

  document.body.appendChild(cookie);

  setTimeout(() => {
    cookie.remove();
  }, 800);
}

// compra upgrade
function comprar(valor) {
    let precos = {
      2: 20,
      5: 50,
      10: 100,
      25: 250,
      50: 500
    };

    let preco = precos[valor];

    // verifica se pode comprar
    if (clicks >= preco) {
      clicks -= preco;

      upgrades[valor]++;

      // recalcula multiplicador
      multiplicador = 1;
      for (let key in upgrades) {
        multiplicador += key * upgrades[key];
      }

      // atualiza contador
      document.getElementById("contador").textContent =
        "Número de Cookies: " + clicks;

      // atualiza texto do botão
      document.getElementById("quantos" + valor + "x").textContent =
        "Comprado: " + upgrades[valor];
    } else {
      alert("Sem cookies suficientes!");
    }
}


  upgrades[valor]++;

  // recalcula o multiplicador total
  multiplicador = 0;

  for (let key in upgrades) {
    multiplicador += key * upgrades[key]; // percorre todos os upgrades e soma: (valor do upgrade * quantidade comprada) 
                                          // isso calcula o multiplicador total do clique
  }

  // garante que nunca seja 0
  if (multiplicador === 0) {
    multiplicador = 1;
  }

  const texto = document.getElementById("quantos" + valor + "x");
  texto.textContent = "Comprado: " + upgrades[valor];
