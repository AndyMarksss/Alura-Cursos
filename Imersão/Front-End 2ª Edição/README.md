<div align="center">

# 🎧 Imersão Front-End (2ª Edição)

Projeto inspirado no Spotify:
- layout (HTML/CSS) bem caprichado
- busca de artistas consumindo uma API local

<br/>

<p align="center">
  <a href="../../README.md">🏠 Home</a> •
  <a href="../README.md">⬅️ Imersão</a>
</p>

</div>

---

## 📦 Estrutura

- `index.html` — estrutura principal
- `src/` — estilos e assets
- `api-artists/artists.json` — dados pra API local
- `script.js` — lógica de busca/renderização (em construção)

---

## 🔎 Busca (API local)

No `script.js`, você monta a URL:
`http://localhost:3000/artists?name_like=<termo>`

### ▶️ Rodar com JSON Server (sugestão)
```bash
npx json-server --watch api-artists/artists.json --port 3000

Depois:

abra o index.html via Live Server

digite no campo de busca

📝 Nota didática

No final do script.js tem um detalhe:
document;addEventListener(...)
O correto é:
document.addEventListener(...)

(pasta perfeita pra evoluir a função displayResults(result) e renderizar nome + imagem)

<p align="center"><sub>May&nbsp;the&nbsp;force&nbsp;be&nbsp;with&nbsp;you. 🌓</sub></p> ```