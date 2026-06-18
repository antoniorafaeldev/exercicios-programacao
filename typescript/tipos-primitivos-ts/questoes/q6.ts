/* Crie uma função chamada mascararCartao que recebe o número de um cartão de crédito como string. A função deve retornar uma nova string exibindo apenas os 4 últimos dígitos legíveis, substituindo todos os anteriores pelo caractere * */

function maskCard(card: string): string {
    let cardLength = card.length
    let lastCharacters = card.slice(cardLength - 4)
    let maskCharacter = "*"

    return `${maskCharacter.repeat(Math.max(0, cardLength - 4))}${lastCharacters}`

}

console.log(maskCard("1"))