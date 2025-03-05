// Variáveis para armazenar o nome e a quantidade de experiência do herói
let nomeHeroi = "SuperMan";
let xpHeroi = 998;

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói com base na XP
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 6000) {
    nivel = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem de saída
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);