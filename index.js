// Tipos de dados e variáveis
const nome1 = 'Ana Paula'
const nome2 = "Lucas"
const nome3 = `Cacau`

let idade1 = 30
let idade2 = 28
let idade3 = 3.5

let listaUFs=['MG', 'SP', 'PR']
let arrayTest = ['teste', 22, true, false, null, undefined, new Date()]

/*
 - Operadores Aritméticos:
Adição (+), Subtração (-), Multiplicação (*), Divisão (/), Resto da divisão (%), Incremento (++), Decremento (--)

 - Operadores de Atribuição:
Atribuição simples (=), Atribuição com adição (+=), Atribuição com subtração (-=),Atribuição com multiplicação (*=),Atribuição com divisão (/=),Atribuição com resto da divisão (%=)

 - Operadores de Comparação:
Igual (==), Não igual (!=), Estritamente igual (===), Estritamente não igual (!==), Maior que (>), Menor que (<),Maior ou igual que (>=), Menor ou igual que (<=)

 - Operadores Lógicos:
E lógico (&&), OU lógico (||), NÃO lógico (!)

 -  Operadores de Concatenação:
Concatenação de strings (+)

 - Operadores Ternários:
Operador ternário (? :)
*/

// Estruturas de controle de fluxo (condicionais, loops)
const numero = 99
if (numero > 0) {
    console.log('O numero: ' + numero + 'é positivo')
} else if (numero < 0) {
    console.log('O numero: ' + numero + 'é negativo')
}  else {
    console.log(`O numero ${numero} é igual a 0`)
}    

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (const item of arrayTest){
  console.log(item)
}

const media = (idade1 + idade2 + idade3) / 3
switch (media) {
  case 10:
    // bloco de código a ser executado se a expressão corresponder a valor1
    break;
  case 20:
    // bloco de código a ser executado se a expressão corresponder a valor2
    break;
  default:
    // bloco de código a ser executado se a expressão não corresponder a nenhum valor
}

while (false) {
  // bloco de código a ser repetido enquanto a condição for verdadeira
}

//--------------------------------------------------------------- */
// Funções e escopo
const nome = 'João'; // Variável global
function saudar() {
  console.log(`Olá, ${nome}!`);
}
saudar(); // Output: Olá, João!

function multiplicar(a, b) {
  const result = a * b; // Variável local
  return result;
}
const resultado = multiplicar(5, 3);
console.log(resultado); // Output: 15
//console.log(resultado2); // Output: ReferenceError: resultado2 is not defined
//console.log(result); // Output: Undefined OU ReferenceError: result is not defined


// Manipulação de arrays e objetos
let arrayFrutas = ['maça', 'banana', 'uva', 'melancia']
console.log(arrayFrutas[2]) // Output: Uva
arrayFrutas.push('goiaba')
console.log(arrayFrutas) // Output: ['maça', 'banana', 'uva', 'melancia', 'goiaba']
console.log(arrayFrutas.slice(1, 2))
console.log(arrayFrutas.slice(1, 4))
arrayFrutas.forEach(function(fruta) {
    console.log(fruta)
})

let objetoPessoa = {
    nome: 'Cacau Gusmão',
    idade: 3,
    cidade: 'Santa Luzia',
    personalidade: ['sem vergonha', 'pilantrinha'],
    preguicosa: true
}

console.log(objetoPessoa)
console.log(objetoPessoa.nome)

objetoPessoa.idade = 4
console.log(objetoPessoa.idade)

objetoPessoa.profissao = 'Atoa'
console.log(objetoPessoa)

delete objetoPessoa.profissao
console.log(objetoPessoa)

// Tratamento de erros
try {
    const numerador = 10
    const denominador = 0
    const resultadoErro = numerador/denominador
    console.log(resultadoErro)

} catch (error) {    
    console.log(error);
}

// Promises e async/await (programação assíncrona)

