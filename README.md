# Projeto-3---Classes-e-Objetos-de-Um-Jogo
Continuação dos Projetos 1 (Classificador Nível de Herói) e 2 (Calculadora de Partidas Rankeadas) em JS.

OBS: Todos os Projetos são testados tanto no VS CODE quanto no Site: https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_nodejs

Documento em Markdown organizado, com os códigos em JavaScript e explicações didáticas, no mesmo estilo Markdown de ser. 

---

# 🧙‍♂️ Código em JavaScript — Classe **Herói**

Este exemplo demonstra o uso de **classes em JavaScript** para representar heróis de diferentes tipos, cada um com seu estilo de ataque característico.

---

## 📌 Classe `Heroi`

```javascript
// Classe para Representar um Herói.
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        // Estrutura de Decisão para definir ataque conforme o tipo do Herói  
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
            ataque = "Ataque Desconhecido";
        }
        return ataque;
    }
}
```

### 🔎 Explicação:

* **`class Heroi`**: cria o molde para nossos heróis.
* **Construtor (`constructor`)**: recebe `nome`, `idade` e `tipo` e atribui ao objeto.
* **Método `atacar()`**: utiliza **estrutura de decisão (`if/else`)** para retornar um ataque diferente de acordo com o tipo do herói.

---

## 📋 Criando Vários Heróis

```javascript
// Lista de Heróis criados.
let listaHerois = [
    new Heroi("Gandalf", 2019, "mago"), 
    new Heroi("Arthur", 87, "guerreiro"),
    new Heroi("Liang", 45, "monge"),
    new Heroi("Legolas", 2931, "arqueiro"),
    new Heroi("Naruto", 32, "ninja"),
];
```

### 🔎 Explicação:

* Aqui criamos **cinco heróis** com diferentes tipos: mago, guerreiro, monge, arqueiro e ninja.
* Cada herói é um **objeto** instanciado a partir da classe `Heroi`.

---

## 🔄 Executando os Ataques

```javascript
// Laço de Repetição para executar o Método atacar de cada Herói.
for (let heroi of listaHerois) {
    let ataque = heroi.atacar();
    console.log(`${heroi.nome} (${heroi.tipo}) - ${ataque}`);
}
```

### 🔎 Explicação:

* Usamos o **laço `for...of`** para percorrer a lista de heróis.
* Para cada herói:

  * Chamamos o método `atacar()`.
  * Exibimos no console o **nome**, o **tipo** e o **ataque** correspondente.

---

## ▶️ Saída Esperada no Console

```
Gandalf (mago) - Lança Magia
Arthur (guerreiro) - Usa Espada
Liang (monge) - Artes Marciais
Legolas (arqueiro) - Dispara Flecha
Naruto (ninja) - Shuriken
```

---

⚔️ **Resumo**:
Esse código mostra como usar **classes, métodos e estruturas condicionais** em JavaScript para criar heróis que executam ataques diferentes, tornando o sistema flexível e expansível.

---



