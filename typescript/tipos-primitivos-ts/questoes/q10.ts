/* Crie uma função chamada calculateAverage que recebe um array contendo apenas números (grades: number[]). A função deve calcular e retornar a média aritmética desses números. Adicione uma proteção importante: se o array estiver vazio (comprimento igual a 0), a função deve retornar 0 imediatamente para evitar erros de divisão por zero. */

function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  let gradesSum: number = 0;

  for (let grade of grades) {
    gradesSum += grade;
  }

  let average: number = gradesSum / grades.length;
  return average;
}

console.log(calculateAverage([10, 10, 9]));
console.log(calculateAverage([6, 7, 9]));
console.log(calculateAverage([7, 4, 7]));
console.log(calculateAverage([]));
