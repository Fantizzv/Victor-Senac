const numeros = []

// Repita 10 vezes
for (let i = 0; i < 10; i++) {  
    const n = Math.round(Math.random() * 100)
    numeros.push(n)
} // Fim do repita 10 vezes

console.log(numeros)

// Muda 'tamanho' para 'tamanhos de números'
const tamanho = numeros.length

for (let i = 1; i <= tamanho; i++) {
    //Mude 'i' para 1
    let i = 0
    for (let y = 1; y > tamanho; y++) {
        console.log(i)
        i = i + 1
    }
} // Fim de repita 'tamanho' vezes