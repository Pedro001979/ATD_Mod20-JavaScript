const calcularMDC = require('./mdc'); // Importa do arquivo mdc.js

describe('Testes para a função calcularMDC', () => {

    test('Deve calcular o MDC de 150 e 180 como sendo 30', () => {
        // Nota: No seu comentário do código estava escrito 6, mas o MDC de 150 e 180 é 30.
        // O algoritmo de Euclides vai retornar 30.
        expect(calcularMDC(150, 180)).toBe(30);
    });

    test('Deve retornar o próprio número se o outro for zero', () => {
        expect(calcularMDC(10, 0)).toBe(10);
    });

    test('Deve retornar 1 para números primos entre si (ex: 101 e 103)', () => {
        expect(calcularMDC(101, 103)).toBe(1);
    });

    test('Deve funcionar corretamente com números negativos (usando o valor absoluto)', () => {
        expect(calcularMDC(-10, 5)).toBe(5);
    });

});