// ============================================================
// JOGO PONG COM P5.JS - Um clássico dos videogames!
// ============================================================

// ===== IMAGENS E SONS =====
// Aqui armazenamos as imagens e sons que vamos usar
// São como "recipientes" que guardam os recursos do jogo
let bolaImagem;        // A bolinha que vai e vem
let jogadorImagem;     // A barra do jogador (você)
let computadorImagem;  // A barra do computador (IA)
let fundoImagem;       // O fundo da tela
let quicarSom;         // Som quando a bola bate na raquete
let golSom;            // Som quando faz ponto

// ===== PLACAR =====
// Contadores de pontos - começam em zero
let pontosJogador = 0;      // Seus pontos
let pontosComputador = 0;   // Pontos do computador

// ===== CONSTANTES DA BOLA =====
// Uma constante é um valor que NÃO muda durante o jogo
// Seu raio (tamanho) é sempre 10 pixels
const radius = 10;

// ===== CLASSE RAQUETE =====
// Uma "classe" é como um molde para criar objetos iguais
// Aqui criamos o molde das raquetes (barras)
class Raquete {
    // O "construtor" é executado quando criamos uma raquete nova
    // Ele define as propriedades iniciais (características)
    constructor(x) {
        this.x = x;              // Posição horizontal (qual lado da tela)
        this.y = height / 2;     // Posição vertical (altura da tela / 2 = meio)
        this.w = 10;             // Largura da raquete em pixels
        this.h = 60;             // Altura da raquete em pixels
    }

    // ===== MÉTODO UPDATE (ATUALIZAR) =====
    // Este método atualiza a posição da raquete a cada quadro
    update() {
        // Verifica se é a raquete do JOGADOR (lado esquerdo)
        // width / 2 é o meio da tela horizontalmente
        if (this.x < width / 2) {
            // Raquete do jogador segue seu MOUSE
            // mouseY é a posição vertical do seu cursor
            this.y = mouseY;
        } else {
            // Raquete do COMPUTADOR (lado direito) segue a bola automaticamente
            // A IA é "inteligente": move-se 3 pixels por vez
            if (bola.y < this.y) {
                // Se a bola está acima da raquete, desce (diminui Y)
                this.y -= 3;
            } else {
                // Se a bola está abaixo da raquete, sobe (aumenta Y)
                this.y += 3;
            }
        }

        // ===== PROTEÇÃO DE BORDAS =====
        // A função constrain() "aprisiona" um valor entre um mínimo e máximo
        // Isso evita que a raquete saia da tela (mínimo: 0, máximo: altura - tamanho da raquete)
        this.y = constrain(this.y, 0, height - this.h);
    }

    // ===== MÉTODO DESENHA =====
    // Coloca a raquete na tela
    desenha() {
        // Define qual imagem usar: jogador ou computador
        // Se está no lado esquerdo, usa jogadorImagem; senão, usa computadorImagem
        const img = this.x < width / 2 ? jogadorImagem : computadorImagem;
        // Desenha a imagem na posição (x, y) com tamanho (w, h)
        image(img, this.x, this.y, this.w, this.h);
    }
}

// ===== FUNÇÕES DE COLISÃO =====
// Esta função verifica se a bola (círculo) bateu numa raquete (retângulo)
// Precisamos disso para: deflexão da bola, som de batida e aumentar velocidade
function colideCirculoRetangulo(cx, cy, raio, x, y, w, h) {
    // cx, cy = posição do centro do círculo (bola)
    // raio = tamanho do círculo
    // x, y, w, h = posição e tamanho do retângulo (raquete)

    // Verificar as 4 bordas do retângulo:
    // Se a bola passou completamente pela DIREITA ou ESQUERDA, não colidiu
    if (cx + raio < x || cx - raio > x + w) return false;
    // Se a bola passou completamente pela CIMA ou BAIXO, não colidiu
    if (cy + raio < y || cy - raio > y + h) return false;
    
    // Se chegou aqui, houve colisão!
    return true;
}

// ===== CLASSE BOLA =====
// O molde para criar a bola do jogo
class Bola {
    constructor(radius) {
        this.radius = radius;  // Tamanho da bola
        this.reset();          // Inicia a bola no centro (explicado abaixo)
    }

    // ===== MÉTODO RESET =====
    // "Reseta" a bola quando há gol ou no começo do jogo
    reset() {
        this.x = width / 2;      // Posição horizontal: centro da tela
        this.y = height / 2;     // Posição vertical: centro da tela
        
        // ===== VELOCIDADE ALEATÓRIA =====
        // A bola começa com velocidade diferente cada vez
        const velocidadeMaxima = 5;
        // Math.random() gera número entre 0 e 1
        // Multiplicamos por 2 (0 a 10), subtraímos velocidadeMaxima (resultado: -5 a 5)
        // Isso permite que a bola vá para esquerda ou direita aleatoriamente
        this.vX = Math.random() * velocidadeMaxima * 2 - velocidadeMaxima;
        this.vY = Math.random() * velocidadeMaxima * 2 - velocidadeMaxima;
        
        this.angle = 0;  // Ângulo de rotação (para girar a imagem)
    }

    // ===== MÉTODO UPDATE =====
    // Atualiza posição, verifica colisões e limites da tela
    update() {
        // ===== MOVIMENTO =====
        // Velocidade = quanto a bola se move por quadro
        this.x += this.vX;  // Move horizontalmente
        this.y += this.vY;  // Move verticalmente

        // ===== ROTAÇÃO =====
        // Calcula a velocidade total (Teorema de Pitágoras: √(vX² + vY²))
        // Quanto mais rápido, mais gira
        this.angle += Math.sqrt(this.vX * this.vX + this.vY * this.vY) / 20;

        // ===== VERIFICAR GOL =====
        // Se a bola passou de um dos lados, é GOL!
        if (this.x < this.radius + 5 || this.x > width - this.radius - 5) {
            // Faz gol à ESQUERDA = computador marca ponto
            if (this.x < this.radius + 5) {
                pontosComputador++;
            } else {
                // Faz gol à DIREITA = jogador marca ponto
                pontosJogador++;
            }
            golSom.play();      // Toca som de gol
            falaPontos();       // Anuncia o placar
            this.reset();       // Reinicia a bola no centro
        }

        // ===== COLISÃO COM BORDAS SUPERIOR E INFERIOR =====
        // Se a bola toca no teto ou chão, inverte a velocidade vertical
        // Multiplicar por -1 inverte a direção
        if (this.y < this.radius + 5 || this.y > height - this.radius - 5) {
            this.vY *= -1;
        }

        // ===== COLISÃO COM RAQUETES =====
        // Verifica se colidiu com a raquete do jogador OU do computador
        if (colideCirculoRetangulo(this.x, this.y, this.radius, jogador.x, jogador.y, jogador.w, jogador.h) ||
            colideCirculoRetangulo(this.x, this.y, this.radius, computador.x, computador.y, computador.w, computador.h)) {
            quicarSom.play();  // Toca som de batida
            this.vX *= -1.1;   // Inverte direção horizontal E aumenta 10% (fica mais rápida)
            this.vY *= 1.1;    // Aumenta 10% a velocidade vertical (mais ação!)
        }
    }

    // ===== MÉTODO DESENHA =====
    // Desenha a bola girando na tela
    desenha() {
        push();                    // "Salva" as configurações de desenho atuais
        translate(this.x, this.y); // Move o ponto de desenho para a posição da bola
        rotate(this.angle);        // Rotaciona conforme o ângulo calculado
        imageMode(CENTER);         // Desenha a imagem com centro em (0,0)
        image(bolaImagem, 0, 0, this.radius * 2, this.radius * 2);  // Desenha no centro
        pop();                     // "Restaura" as configurações anteriores
    }
}

// ===== INSTÂNCIAS DOS OBJETOS =====
// Aqui vamos criar as versões concretas dos moldes (classes)
let bola;       // Uma bola
let jogador;    // Uma raquete para o jogador
let computador; // Uma raquete para o computador (IA)

// ===== FUNÇÃO DE ÁUDIO =====
// Anuncia o placar usando síntese de voz
function falaPontos() {
    // Verifica se o navegador suporta fala (speechSynthesis)
    if ('speechSynthesis' in window) {
        // Cria uma mensagem com o placar atual
        const pontuacao = `Jogador: ${pontosJogador}, Computador: ${pontosComputador}`;
        // Cria um objeto de fala
        const msg = new SpeechSynthesisUtterance(pontuacao);
        msg.lang = 'pt-BR';  // Define o idioma como português brasileiro
        window.speechSynthesis.speak(msg);  // Fala a mensagem em voz alta!
    }
}

// ===== CARREGAMENTO DE ASSETS =====
// Esta função DEVE rodas ANTES de setup() - é a primeira coisa do jogo
// Aqui carregamos imagens e sons (caso contrário, não funcionam)
function preload() {
    bolaImagem = loadImage('Sprites/bola.png');
    jogadorImagem = loadImage('Sprites/barra01.png');
    computadorImagem = loadImage('Sprites/barra02.png');
    fundoImagem = loadImage('Sprites/fundo2.png');
    quicarSom = loadSound('Sounds/toque.mp3');
    golSom = loadSound('Sounds/ponto.mp3');
}

// ===== INICIALIZAÇÃO =====
// Roda UMA ÚNICA VEZ no início do jogo
function setup() {
    createCanvas(800, 400);           // Cria uma tela de 800x400 pixels
    bola = new Bola(radius);          // Cria uma bola com raio de 10 pixels
    jogador = new Raquete(30);        // Cria raquete do jogador (x=30, à esquerda)
    computador = new Raquete(width - 40);  // Cria raquete do computador (x=760, à direita)
}

// ===== LOOP PRINCIPAL =====
// Roda CONTINUAMENTE (cerca de 60 vezes por segundo)
// Aqui atualizamos e desenamos todos os elementos do jogo
function draw() {
    // ===== DESENHAR FUNDO RESPONSIVO =====
    // O fundo se adapta ao tamanho da tela mantendo sua proporção
    const imgWidth = fundoImagem.width;    // Largura original da imagem
    const imgHeight = fundoImagem.height;  // Altura original da imagem
    const canvasRatio = width / height;    // Proporção da tela
    const imgRatio = imgWidth / imgHeight; // Proporção da imagem
    let drawWidth, drawHeight, offsetX, offsetY;

    // Se a tela é mais "larga" que a imagem, ajusta a altura
    if (canvasRatio > imgRatio) {
        drawWidth = width;           // Usa toda a largura
        drawHeight = width / imgRatio;  // Calcula altura proporcionalmente
        offsetX = 0;                 // Sem deslocamento horizontal
        offsetY = (height - drawHeight) / 2;  // Centraliza verticalmente
    } else {
        // Se a imagem é mais "larga", ajusta a largura
        drawWidth = height * imgRatio;  // Calcula largura proporcionalmente
        drawHeight = height;         // Usa toda a altura
        offsetX = (width - drawWidth) / 2;   // Centraliza horizontalmente
        offsetY = 0;                 // Sem deslocamento vertical
    }
    image(fundoImagem, offsetX, offsetY, drawWidth, drawHeight);

    // ===== ATUALIZAR E DESENHAR TODOS OS ELEMENTOS =====
    bola.update();      // Atualiza posição, colisões e rotação da bola
    bola.desenha();     // Desenha a bola na tela
    
    jogador.update();   // Atualiza posição da raquete do jogador (segue mouse)
    jogador.desenha();  // Desenha a raquete do jogador
    
    computador.update();  // Atualiza posição da raquete do computador (IA)
    computador.desenha(); // Desenha a raquete do computador
}
