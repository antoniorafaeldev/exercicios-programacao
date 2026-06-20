/* Em sistemas reais, identificadores (IDs) podem vir do banco de dados como números (1) ou como textos ("usr_9283"). Crie uma função chamada formatUserId que recebe um id que pode ser string ou number. 

Se for um number, a função deve retornar o número formatado com zeros à esquerda usando o padrão "ID-000X" (ex: ID-0005).

Se for uma string, ela deve apenas retornar o texto em letras maiúsculas.
*/
/*
1 digito = 3 zeros
2 digitos = 2 zeros
3 digitos = 1 zero
4 digitos = nenhum zero

*/


function formatID(id: string | number) {
  if (typeof id === "number") {
    let formatedId: string = id.toString().padStart(4, "0")

    return `ID-${formatedId}`;
  }

  return id.toUpperCase()
}

console.log(formatID(5))
console.log(formatID(28))
console.log(formatID(143))
console.log(formatID(9999))
console.log(formatID(9999))
console.log(formatID(676767))
console.log(formatID("admin"))
console.log(formatID("user_mario"))
