/* Defina o tipo de retorno de uma função simples que valida se um número é par ou ímpar. */

function isEven(number: number): boolean {
  return number % 2 == 0 ? true : false;
}

console.log(isEven(3));
console.log(isEven(34));
console.log(isEven(35));
console.log(isEven(10));
console.log(isEven(21));
