/*
Operadores Lógicos
&& -> (and/e)
|| -> (or/ou)
! _> (not/negado)
*/

//Exemplo simples
let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condição simples")

if(num1>=num2){
    console.log("Entrou no IF")
} else{
    console.log9("Entrou no ELSE")
}

//Condição composta

console.log("Condição composta")

if((num1>=num2) && (num1>num3)){
    console.log("Entrou no IF")
} else {
    console.log9("Entrou no ELSE")
}


//Condição cTripla

console.log("Condição Tripla")

if((num1>=num2) && (num1>num3) || (num1<num3)){
    console.log("Entrou no IF")
} else {
    console.log9("Entrou no ELSE")
}