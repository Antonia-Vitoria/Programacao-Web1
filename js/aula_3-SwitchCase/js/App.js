let soma
let mult
alert("Bem vindo(a) a aula de Switch Case")
let num1 = Number(prompt("Insira o primeiro numero"))
let num2 = Number(prompt("Insira o segundo numero "))

let escolha = Number(prompt("Digite 1 para soma\nDigite 2 para multiplicação"))

switch (escolha) {
    case 1: {
        soma = num1 + num2
        alert(`Você esco,heu soma.\nA soma dos números é ${soma}`)
    } break
    case 2: {
        mult = num1 * num2
        alert(`Você escolheu multiplicação.\nO produto dos números é ${mult}`)
    } break
    default: alert("ERROR! Opção invalida")
}
