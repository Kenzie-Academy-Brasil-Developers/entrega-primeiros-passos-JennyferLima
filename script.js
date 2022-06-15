//PRIMEIRA SOLUÇÃO

/*

const arroz = 22.99;
const ervilha = 6.99;
const feijao = 10.89;
const macarrao = 6.99;
const refrigerante = 11.99;
const vinho = 70.00;

let total = 3*arroz+3*ervilha+2*feijao+4*macarrao+3*refrigerante+3*vinho;

let metadeTotal = total/2;

if(total % 2 == 0){
    let voce = metadeTotal.toFixed(2) - vinho; //.toFixed(2) para arredondar o valor
    let amigo = metadeTotal.toFixed(2) + vinho;
    console.log(`Você pagará ${voce} e seu amigo pagará ${amigo}`);
}else{
    let voce = metadeTotal.toFixed(2);
    let amigo = metadeTotal.toFixed(2);
    console.log(`Você pagará ${voce} e seu amigo pagará ${amigo}`);
}

*/

//SOLUÇÃO COM EXTRA

let precoArroz = parseFloat(prompt("Digite o preço do arroz: "));
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"));

let precoErvilha = parseFloat(prompt("Digite o preço da ervilha: "));
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"));

let precoFeijao = parseFloat(prompt("Digite o preço do feijão: "));
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"));

let precoMacarrao = parseFloat(prompt("Digite o preco do macarrão"));
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"));

let precoRefrigerante = parseFloat(prompt("Digite o preço do refrigerante: "));
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"));

let precoVinho = parseFloat(prompt("Digite o preço do vinho: "));
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"));

let total = quantidadeArroz*precoArroz + quantidadeErvilha*precoErvilha + quantidadeFeijao*precoFeijao + quantidadeMacarrao*precoMacarrao + quantidadeRefrigerante*precoRefrigerante + quantidadeVinho*precoVinho;

let metadeTotal = total/2;

if(total % 2 == 0){
    let voce = metadeTotal.toFixed(2) - vinho; //.toFixed(2) para arredondar o valor
    let amigo = metadeTotal.toFixed(2) + vinho;
    alert(`Você pagará ${voce} e seu amigo pagará ${amigo}`);
}else{
    let voce = metadeTotal.toFixed(2);
    let amigo = metadeTotal.toFixed(2);
    alert(`Você pagará ${voce} e seu amigo pagará ${amigo}`);
}