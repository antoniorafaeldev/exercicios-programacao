/* Crie uma função chamada gerarSaudação que recebe um nome (string) e um parâmetro opcional pronome (string). Se o pronome for fornecido, a função deve retornar "Olá, [pronome] [nome]!". Se não for fornecido, deve retornar apenas "Olá, [nome]!". */

function gerenateGreeting(name: string, pronoun?: string): string {
    if (!pronoun) {
        return `Olá, ${name}!`
    }

    return `Olá, ${pronoun} ${name}!`
}

console.log(gerenateGreeting("rafa"))
console.log(gerenateGreeting("rafa", "seu"))