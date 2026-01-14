/**
 * Retorna a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
 *
 * @returns {number} A soma total dos múltiplos.
 */
function somaMultiplosDe5Ou7AbaixoDe1000() {
  const limite = 1000;
  let soma = 0;

  // Percorre todos os números de 1 até 999 (abaixo de 1000)
  for (let i = 1; i < limite; i++) {
    // Verifica se o número 'i' é divisível por 5 (i % 5 === 0)
    // OU se o número 'i' é divisível por 7 (i % 7 === 0)
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}

// A solução otimizada usa o Princípio da Inclusão-Exclusão
// Soma(n) = soma dos múltiplos de m abaixo de n: m * (floor((n-1)/m) * (floor((n-1)/m) + 1) / 2)
function somaMultiplosOtimizada(limite) {
  const n = limite - 1; // Usamos 999 para o limite de 1000

  // Função auxiliar para somar os múltiplos de um número 'm'
  const somaDeMultiplos = (m) => {
    // Quantidade de múltiplos: floor(n/m)
    const count = Math.floor(n / m);
    // Soma da PA: m * (1 + 2 + ... + count) = m * (count * (count + 1) / 2)
    return m * (count * (count + 1) / 2);
  };

  // Soma dos múltiplos de 5
  const soma5 = somaDeMultiplos(5);
  // Soma dos múltiplos de 7
  const soma7 = somaDeMultiplos(7);
  // Soma dos múltiplos de 35 (5 * 7), que foram contados duas vezes
  const soma35 = somaDeMultiplos(35);

  // Pelo Princípio da Inclusão-Exclusão: S(5 ou 7) = S(5) + S(7) - S(5 e 7)
  return soma5 + soma7 - soma35;
}


// Resultado:
const resultadoSoma = somaMultiplosDe5Ou7AbaixoDe1000();
console.log("Soma dos múltiplos de 5 ou 7 abaixo de 1000:", resultadoSoma);

module.exports = somaMultiplosDe5Ou7AbaixoDe1000