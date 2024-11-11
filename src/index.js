// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const numeros = [1, 4, 3, 6, 5, 8,10,18]; // escolha os números que desejar 
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))
