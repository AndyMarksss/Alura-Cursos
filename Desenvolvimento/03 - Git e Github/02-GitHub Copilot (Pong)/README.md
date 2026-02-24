<div align="center">

# 🤖🎮 GitHub Copilot — Pong (p5.js)

Jogo **Pong** feito com **p5.js**, sprites, sons e placar falado.
Projeto para praticar fluxo **Git/GitHub** (commit, push, PR) e explorar o **Copilot**.

<br/>

<p align="center">
  <a href="../../../README.md">🏠 Home</a> •
  <a href="../../README.md">⬅️ Desenvolvimento</a> •
  <a href="../README.md">⬅️ Módulo 03</a>
</p>

</div>

---

## 🎮 Projeto prático

### O que tem no código
- **p5.js** + **p5.sound** via CDN
- sprites (bola, barras e fundo)
- colisão **círculo × retângulo** (bola × raquete)
- IA simples para o computador (segue a bola)
- efeitos sonoros (toque / ponto)
- anúncio do placar via `SpeechSynthesis` (`pt-BR`)

### ▶️ Rodando
1. Abra `index.html` (**Live Server** recomendado).
2. Garanta conexão com a internet (bibliotecas carregadas via CDN).
3. Se o som não tocar, clique na página (alguns navegadores bloqueiam autoplay).
4. A barra do jogador segue o **mouse**.

### 📁 Estrutura
- `index.html` — carrega p5.js e o jogo
- `sketch.js` — lógica do Pong
- `Sprites/` — imagens
- `Sounds/` — efeitos sonoros

---

<p align="center"><sub>May&nbsp;the&nbsp;force&nbsp;be&nbsp;with&nbsp;you. 🌓</sub></p>