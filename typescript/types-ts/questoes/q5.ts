/* 
Crie um tipo chamado CartItem (Item do Carrinho) contendo:

productId (number)

quantity (number)

pricePerUnit (number)

Crie uma função chamada calculateCartTotal que recebe um array desse tipo (items: CartItem[]) e retorna o valor total do carrinho (a soma de quantity * pricePerUnit de cada item).

Lembre-se da proteção: se o array estiver vazio, deve retorna
*/

type CartItem = {
  productId: number;
  quantity: number;
  pricePerUnit: number;
};

function calculateCartTotal(cart: CartItem[]): number {
  let totalValue: number = 0;

  for (const cartItem of cart) {
    const { quantity, pricePerUnit } = cartItem;

    let itemValue = quantity * pricePerUnit;
    totalValue += itemValue;
  }

  return totalValue;
}

const cart: CartItem[] = [
  {
    productId: 1,
    quantity: 2,
    pricePerUnit: 10,
  },
  {
    productId: 2,
    quantity: 4,
    pricePerUnit: 6,
  },
  {
    productId: 3,
    quantity: 1,
    pricePerUnit: 20,
  }
];

const emptyCart: CartItem[] = []

console.log(calculateCartTotal(cart))
console.log(calculateCartTotal(emptyCart))