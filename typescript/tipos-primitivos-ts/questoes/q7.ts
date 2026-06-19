/* Crie uma função chamada calcularDesconto que recebe o valorTotal de uma compra e a porcentagem do desconto. Ambos devem ser números. A função deve retornar o valor final com o desconto aplicado. Adicione uma validação interna: se a porcentagem for menor que 0 ou maior que 100, a função deve retornar o valor original sem desconto. */

function calculateDiscount(
  totalValue: number,
  discountPercentage: number,
): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    return totalValue;
  }

  return totalValue * (1 - discountPercentage / 100);
}

console.log(calculateDiscount(100, 100));
console.log(calculateDiscount(800, 20));
