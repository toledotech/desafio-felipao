// Função para calcular o nível do jogador baseado nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível do jogador baseado na quantidade de vitórias
    let nivel;
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    // Retorna um objeto com o saldo de vitórias e o nível
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplos de uso da função
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Testando com diferentes valores
exibirResultado(8, 2);     // Ferro
exibirResultado(15, 5);    // Bronze
exibirResultado(30, 10);   // Prata
exibirResultado(60, 20);   // Ouro
exibirResultado(85, 15);   // Diamante
exibirResultado(95, 10);   // Lendário
exibirResultado(120, 15);  // Imortal