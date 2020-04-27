/*Requisitar ao usuário*/ 
var num1 = prompt("Digite um número!");
var operacao = prompt("Digite o nome da operação (soma ou subtração). ex: (soma)");
var num2 = prompt("Digite o outro número!");

/*Função*/

function realizarOperacao(num1, operacao, num2){

    var num1 = parseInt(num1);
    var num2 = parseInt(num2);

    if(operacao="soma"){
        var resultado= num1 + num2
    } else if(operacao="subtração"){
        var resultado= num1-num2
    } else{
        document.write("Poxa, algo deu errado na sua operação! :(")
    }

    return resultado

};

document.write("O resultado é: "+ realizarOperacao(num1, operacao, num2))


