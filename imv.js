/**
 * Encontra o índice do maior e o índice do menor valor em um array numérico.
 *
 * @param {number[]} arr O array de números (sem valores repetidos).
 * @returns {{indiceMaior: number, indiceMenor: number} | null} Um objeto contendo os índices
 * ou null se o array estiver vazio.
 */
function encontrarIndicesMaiorMenor(arr) {
  if (!arr || arr.length === 0) {
    return null; // Retorna null para um array vazio
  }

  // Inicializa os índices e valores usando o primeiro elemento do array
  let indiceMaior = 0;
  let indiceMenor = 0;
  let maiorValor = arr[0];
  let menorValor = arr[0];

  // Começa a iteração do segundo elemento (índice 1)
  for (let i = 1; i < arr.length; i++) {
    const valorAtual = arr[i];

    // Verifica se o valor atual é o novo maior
    if (valorAtual > maiorValor) {
      maiorValor = valorAtual;
      indiceMaior = i;
    }

    // Verifica se o valor atual é o novo menor
    if (valorAtual < menorValor) {
      menorValor = valorAtual;
      indiceMenor = i;
    }
  }

  return {
    indiceMaior: indiceMaior,
    indiceMenor: indiceMenor
  };
}

// Exemplo de uso:
const numeros = [5, 20, 8, 1, 15];
const indices = encontrarIndicesMaiorMenor(numeros);
console.log("Array:", numeros);
console.log("Índices:", indices);
// Saída: Índices: { indiceMaior: 1, indiceMenor: 3 }