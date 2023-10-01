const { log, Console } = require('console');

const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));



// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)


// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)




if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
    console.log("Você pode se aposenta!");

    let salarioAposentadoria = 0

    if (tempo > 20) {
        salarioAposentadoria = salario * 0.8;
    } else {
        salarioAposentadoria = salario * 0.6;
    }

    if (salarioAposentadoria > 7087.22) {
        salarioAposentadoria = 7087.22
    }

    if (salarioAposentadoria < 1212) {
        salarioAposentadoria = 1212
    }

    console.log("Seu salário de aposentadoria :", salarioAposentadoria);

} else {

    console.log("Você não pode se aposenta!")
}


