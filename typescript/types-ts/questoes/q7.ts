/*
Crie um tipo chamado TextTransformer. Ele deve definir uma função que recebe uma string e retorna uma string.

Crie uma função chamada applyTransformation que aceita dois parâmetros:

text (string)

transform (uma função do tipo TextTransformer que você criou)

A função applyTransformation deve apenas executar a função recebida no parâmetro transform passando o text como argumento e retornar o resultado.
*/

type TextTransformer = (text: string) => string;

const uppercase: TextTransformer = (text) => text.toUpperCase()
const emoji: TextTransformer = (text) => `🌌${text}🌌`
const lowercase: TextTransformer = (text) => text.toLowerCase()

function applyTransformation(text: string, transform: TextTransformer): string {
    return transform(text)
}

console.log(applyTransformation('oi', uppercase))
console.log(applyTransformation('oi', emoji))
console.log(applyTransformation('oi', lowercase))