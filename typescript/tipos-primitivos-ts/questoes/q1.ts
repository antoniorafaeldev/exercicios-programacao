/*
Crie três variáveis para armazenar as informações de um livro: o título (texto), o ano de publicação (número) e se ele está disponível na biblioteca (booleano). Adicione a tipagem explícita nelas.
*/
let bookTitle: string = "Five Nights at Freedy's - The Silver Eyes";
let publicationYear: number = 2015;
let isAvailable: boolean = true;

function showBook(): void {
  return console.log(
    `Nome do Livro: ${bookTitle} - Ano de publicação: ${publicationYear} - Está disponível? - ${isAvailable}`,
  );
}

showBook();
