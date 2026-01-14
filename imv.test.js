const encontrarIndicesMaiorMenor = require('./imv');

describe('Testes para a função encontrarIndicesMaiorMenor', () => {
    
    test('Deve retornar os índices corretos para um array de números', () => {
        const numeros = [5, 20, 8, 1, 15];
        const resultadoEsperado = { indiceMaior: 1, indiceMenor: 3 };
        
        expect(encontrarIndicesMaiorMenor(numeros)).toEqual(resultadoEsperado);
    });

    test('Deve retornar null se o array estiver vazio', () => {
        expect(encontrarIndicesMaiorMenor([])).toBeNull();
    });

    test('Deve retornar índice 0 para ambos se o array tiver apenas um elemento', () => {
        const numeros = [10];
        const resultado = { indiceMaior: 0, indiceMenor: 0 };
        
        expect(encontrarIndicesMaiorMenor(numeros)).toEqual(resultado);
    });

});