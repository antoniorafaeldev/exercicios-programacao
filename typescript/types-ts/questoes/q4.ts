/*

Crie um tipo chamado Timestamp com os campos createdAt: string e updatedAt: string.

Crie um tipo chamado BaseUser com os campos id: string e email: string.

Crie um terceiro tipo chamado DatabaseUser que seja a interseção (&) entre BaseUser e Timestamp.

Crie uma função chamada wasUserModified que recebe um DatabaseUser e retorna um boolean. A regra é: se createdAt for diferente de updatedAt, significa que o usuário foi modificado (true). Caso contrário, retorna false.

*/

type Timestamp = {
  createdAt: string;
  updatedAt: string;
};

type BaseUser = {
  id: string;
  email: string;
};

type DatabaseUser = BaseUser & Timestamp;

function wasUserModified(databaseUser: DatabaseUser): boolean {
  const { createdAt, updatedAt } = databaseUser;

    return createdAt !== updatedAt
}


const user1: DatabaseUser = {
    createdAt: "2026-06-21",
    updatedAt: "2026-06-21",
    id: "1",
    email: "user1@email.com"
}
const user2: DatabaseUser = {
    createdAt: "2026-06-20",
    updatedAt: "2026-06-21",
    id: "2",
    email: "user2@email.com"
}

console.log(wasUserModified(user1))
console.log(wasUserModified(user2))