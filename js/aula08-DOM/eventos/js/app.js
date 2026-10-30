/* Em Js podemos manipular a estrutura HTML atráves de eventos
1) click - Disparado quando o usuário clica no evento
*/

let titulo = document.getElementById('t1')
//console.log(titulo)

function alterarTitulo() {
    let novoTitulo = prompt("Digite o novo título")
    titulo.textContent = novoTitulo
}

let blackDiv = document.getElementById('caixa')

function mudarCor() {
    blackDiv.style.backgroundColor = "red"
    //console.log(blackDiv)
}
function mudarCorSaida(){
    blackDiv.style.backgroundColor = "green"
}