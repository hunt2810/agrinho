
let jardineiro;
let plantas = [];
let temperatura = 10;
let totalArvores = 0;
//text("arvores")

function setup() {
createCanvas(600, 400);
jardineiro = new Jardineiro(width / 9, height - 20);
}

function draw() {
let corFundo = lerpColor(
color(217, 112, 26),
color(219, 239, 208),
map(totalArvores, 0, 100, 0, 1)
);
background("green")
mostrarInformacoes();
temperatura += 0.1;
jardineiro.atualizar();
jardineiro.mostrar();
verificaFimDeJogo();
plantas.map((arvore) => arvore.mostrar());
}

function mostrarInformacoes() {
textSize(16);
fill("rgb(230,35,35)");
text("Temperatura: " + temperatura.toFixed(1), 10, 20);
text("Árvores: " + totalArvores, 10, 40);
text("Para movimentar use as setas e tecle 'p' para plantar.", 10, 80);
text("Para começar a se mecher clique na tela",20, 100)
}

function verificaFimDeJogo() {
if (totalArvores > temperatura) {
mostrarMensagemDeVitoria();
} else if (temperatura > 50) {
mostrarMensagemDeDerrota();
}
}

function mostrarMensagemDeVitoria() {

textSize(20);
fill("blue");
text("Você venceu! Você plantou muitas árvores.", 100, 200);
noLoop();
}
function mostrarMensagemDeDerrota() {
textSize(20);
fill(255, 0, 0);
text("Você perdeu! A temperatura está muito alta.", 100, 200);
noLoop();
}
// Classe Jardineiro
class Jardineiro {
constructor(x, y) {
this.x = x;
this.y = y;
this.emoji = '🧑🏼‍🌾';
this.velocidade = 3;
}
atualizar() {
if (keyIsDown(LEFT_ARROW)) {
this.x -= this.velocidade;
}
if (keyIsDown(RIGHT_ARROW)) {
this.x += this.velocidade;
}
if (keyIsDown(UP_ARROW)) {
this.y -= this.velocidade;
}
if (keyIsDown(DOWN_ARROW)) {
this.y += this.velocidade;
}
}
mostrar() {
textSize(32);
text(this.emoji, this.x, this.y);
}
}
// Classe Árvore
class Arvore {
constructor(x, y) {
this.x = x;
this.y = y;

this.emoji = ('🌳');
}
mostrar() {
textSize(32);
text(this.emoji, this.x, this.y);
}
}
// Plantar árvore ao pressionar tecla
  function keyPressed() {
    if (key === 'p' || key === 'P') {
      let arvore = new Arvore(jardineiro.x, jardineiro.y);
      plantas.push(arvore);
      totalArvores++;
      temperatura -= 3;
      if (temperatura < 0) temperatura = 0;
    }
  }