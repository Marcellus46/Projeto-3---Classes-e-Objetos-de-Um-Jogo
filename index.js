// Classe para Representar um Herói.
class Heroi {
constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}
atacar() {
    let ataque = "";
// Estrutura de Decisão pra definir ataque conforme o tipo do Herói  
if (this.tipo === "mago") {
    ataque = "Lança Magia";
} else if (this.tipo === "guerreiro") {
    ataque = "Usa Espada";
} else if (this.tipo === "arqueiro") {
    ataque = "Dispara Flecha";
} else if (this.tipo === "monge") {
    ataque = "Artes Marciais";
} else if (this.tipo === "ninja") {
    ataque = "Shuriken";
} else {
    ataque = "Ataque Desconhecido";git 
}
return ataque;
}
}
// Lista de Heróis criados.
let listaHerois = [
    new Heroi("Gandalf", 2019, "mago"), 
    new Heroi("Arthur", 87, "guerreiro"),
    new Heroi("Liang", 45, "monge"),
    new Heroi("Legolas", 2931, "arqueiro"),
    new Heroi("Naruto", 32, "ninja"),
];
// Laço de Repetição para executar o Método atacar de cada Herói.
for (let heroi of listaHerois) {
    let ataque = heroi.atacar();
    console.log(`${heroi.nome} (${heroi.tipo}) - ${ataque}`);
}
 

