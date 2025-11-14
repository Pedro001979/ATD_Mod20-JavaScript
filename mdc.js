/**
 * Calcula o Máximo Divisor Comum (MDC) entre dois números inteiros positivos.
 * Utiliza o Algoritmo de Euclides.
 *
 * @param {number} a O primeiro número inteiro.
 * @param {number} b O segundo número inteiro.
 * @returns {number} O MDC dos dois números.
 */
function calcularMDC(a, b) {
  // Garante que os números são positivos (o MDC de |a| e |b| é o mesmo que o MDC de a e b)
  a = Math.abs(a);
  b = Math.abs(b);

  // O algoritmo continua enquanto o segundo número (b) for diferente de 0
  while (b) {
    // A variável 'temp' guarda o valor atual de 'b'
    const temp = b;
    // O novo 'b' é o resto da divisão de 'a' por 'b'
    b = a % b;
    // O novo 'a' é o antigo 'b' (que está em 'temp')
    a = temp;
  }

  // Quando 'b' se torna 0, 'a' contém o MDC
  return a;
}
// Exemplo de uso:
console.log("MDC(150, 180):", calcularMDC(150, 180)); // Saída: 6
console.log("MDC(101, 103):", calcularMDC(101, 103)); // Saída: 1