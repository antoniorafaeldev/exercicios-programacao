/*
Crie um tipo customizado chamado Product (Produto). Ele deve ter quatro propriedades:

id (número)

title (string)

price (número)

inStock (booleano)

Crie uma função chamada displayProductStatus que recebe um parâmetro do tipo Product e retorna uma string:

Se inStock for verdadeiro, retorna: "O produto [title] custa R$[price] e está disponível."

Se for falso, retorna: "O produto [title] está esgotado."

*/

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

function displayProductStatus(product: Product): string {
  const { title, price, inStock } = product;

  if (inStock) {
    return `O produto ${title} custa ${price} e está disponível.`;
  }

  return `O Produto ${title} está esgotado.`;
}

// Teste:
const monitor: Product = {
  id: 1,
  title: "Monitor",
  price: 300,
  inStock: true,
};
const celular: Product = {
  id: 2,
  title: "Celular",
  price: 700,
  inStock: false,
};
const book: Product = {
  id: 3,
  title: "Book",
  price: 10,
  inStock: false,
};

console.log(displayProductStatus(book));
console.log(displayProductStatus(celular));
console.log(displayProductStatus(monitor));
