const somaMultiplosDe5Ou7AbaixoDe1000 = require('./multiplos');

describe('Testes para a função somaMultiplosDe5Ou7AbaixoDe1000', () => {

    test('Deve retornar um número (a soma total)', () => {
        const resultado = somaMultiplosDe5Ou7AbaixoDe1000();
        expect(typeof resultado).toBe('number');
    });

    test('Deve retornar o valor correto da soma abaixo de 1000', () => {
        // O valor exato para múltiplos de 5 ou 7 abaixo de 1000 é 156361
        const resultado = somaMultiplosDe5Ou7AbaixoDe1000();
        expect(resultado).toBe(156361);
    });

    test('O resultado deve ser maior que zero', () => {
        expect(somaMultiplosDe5Ou7AbaixoDe1000()).toBeGreaterThan(0);
    });

});