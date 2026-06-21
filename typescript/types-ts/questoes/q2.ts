/*
Crie um tipo chamado PaymentStatus que é uma união literal das strings: "pending", "approved" ou "declined".

Crie um tipo chamado Order (Pedido) que possui:

orderId (string)

total (número)

status (do tipo PaymentStatus que você acabou de criar acima)

Crie uma função chamada canShipOrder (pode enviar o pedido?) que recebe um Order e retorna um boolean. A regra é: só retorna true se o status do pedido for estritamente "approved".

*/

type PaymentStatus = "pending" | "approved" | "declined";

type Order = {
  orderId: string;
  total: number;
  status: PaymentStatus;
};

function canShipOrder(order: Order): boolean {
  const { status } = order;

  return status === "approved";
}

const hamburguer: Order = {
  orderId: "1",
  total: 5,
  status: "approved",
};
const batataFrita: Order = {
  orderId: "2",
  total: 8,
  status: "pending",
};
const milkshake: Order = {
  orderId: "3",
  total: 5,
  status: "declined",
};

console.log(canShipOrder(batataFrita));
console.log(canShipOrder(hamburguer));
console.log(canShipOrder(milkshake));
