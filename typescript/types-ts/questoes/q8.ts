/*
Crie um tipo chamado LoggerService. Ele deve ser um objeto com duas propriedades que, na verdade, são funções:

log: uma função que recebe uma string e não retorna nada (void).

error: uma função que recebe uma string e não retorna nada (void).

Crie uma função chamada executeDatabaseQuery que recebe dois parâmetros:

query (string)

logger (do tipo LoggerService que você criou)

Dentro da função executeDatabaseQuery:

Se a query for uma string vazia (""), execute a função logger.error passando a mensagem "Query inválida!".

Se a query tiver texto, execute logger.log passando a mensagem "Executando: [query]".
*/

type LoggerService = {
  log: (msg: string) => void;
  error: (msg: string) => void;
};

function executeDatabaseQuery(query: string, logger: LoggerService): void {
  if (query === "") return logger.error("Query Invalida");

  logger.log(`Executando: ${query}`);
}

const myLogger: LoggerService = {
  log: (msg) => console.log(`INFO: ${msg}`),
  error: (msg) => console.error(`ERROR: ${msg}`),
};

executeDatabaseQuery("Select * from Database", myLogger);
executeDatabaseQuery("", myLogger);
