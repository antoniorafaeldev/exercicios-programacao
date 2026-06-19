/* Converte de JS para TS:
function calcularFrete(peso, ehExpresso) {
    let taxaBase = peso * 5;
    if (ehExpresso) {
        return taxaBase + 20;
    }
    return taxaBase;
}
*/
function calcularFrete(peso: number, ehExpresso: boolean):number {
    let taxaBase: number = peso * 5;
    if (ehExpresso) {
        return taxaBase + 20;
    }
    return taxaBase;
}

console.log(calcularFrete(20, true))
console.log(calcularFrete(40, false))