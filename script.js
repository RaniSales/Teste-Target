//QUESTÃO 02 SEQUÊNCIA DE FINBONACCI

let numero = 21; // número a ser verificado se pertence à sequência de Fibonacci
let fibonacci = [0, 1]; // array para armazenar os valores da sequência

// gerando a sequência de Fibonacci até o valor máximo possível antes de ultrapassar o número informado
while (fibonacci[fibonacci.length - 1] < numero) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

// verificando se o número informado está na sequência de Fibonacci
if (fibonacci.includes(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

//-----------------------------------------------------------------------------------------------------------
//QUESTÃO 03 FATURAMENTO

const faturamentoDiario = [2500, 3500, 4200, 2900, 0, 5000, 1800, 3200, 2400, 4000, 3100, 3800, 2900, 0, 3700, 4200, 3000, 2600, 3800, 3300, 2700, 2900, 3100, 2300, 2500, 3500, 4200, 2900, 0, 5000, 1800];

// Calculando o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoDiario);
console.log(`Menor valor de faturamento diário: R$${menorFaturamento.toFixed(2)}`);

// Calculando o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoDiario);
console.log(`Maior valor de faturamento diário: R$${maiorFaturamento.toFixed(2)}`);

// Calculando a média de faturamento mensal
const faturamentoTotal = faturamentoDiario.reduce((total, valor) => total + valor, 0);
const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0).length;
const mediaFaturamento = faturamentoTotal / diasComFaturamento;

// Calculando o número de dias com faturamento acima da média
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaFaturamento).length;
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);

//---------------------------------------------------------------------------------------------------------
//QUESTÃO 04 FATURAMENTO MENSAL 


// valor de faturamento mensal por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // calcula o valor total mensal da distribuidora
  const totalMensal = Object.values(faturamento).reduce((acc, cur) => acc + cur);
  
  // calcula o percentual de representação de cada estado
  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / totalMensal) * 100;
  }
  
  console.log(percentuais); // exibe os percentuais de representação de cada estado


//---------------------------------------------------------------------------------------------------

//QUESTÃO 05 iNVERTE CARÁCTERES DE UMA STRING

let originalString = "eu sou um Texto!";
let reversedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}

console.log("String original: " + originalString);
console.log("String invertida: " + reversedString);
  
