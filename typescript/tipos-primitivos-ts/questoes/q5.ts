/* Crie uma função chamada converterTemperatura que recebe um valor numérico (graus) e uma escala de destino que só pode aceitar estritamente as strings "C" (Celsius) ou "F" (Fahrenheit). A função deve fazer o cálculo de conversão e retornar o número final.
(Fórmula C para F: (C * 9/5) + 32 | Fórmula F para C: (F - 32) * 5/9) */

function convertTemperature(degree: number, scale: "C" | "F"): number {
  if (scale === "F") {
    return ((degree - 32) * 5) / 9;
  }

  return (degree * 9) / 5 + 32;
}

console.log(convertTemperature(32, "F"));
console.log(convertTemperature(100, "C"));
