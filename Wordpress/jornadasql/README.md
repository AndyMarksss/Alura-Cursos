<div align="center">

# 🗄️ Jornada SQL (arquivos de banco)

Arquivos de tabelas do MySQL/InnoDB relacionados ao WordPress, com prefixo `jvwp_`.

<br/>

<p align="center">
  <a href="../../README.md">🏠 Home</a> •
  <a href="../README.md">⬅️ Wordpress</a>
</p>

</div>

---

## 📦 O que tem aqui

- `db.opt`
- tabelas `jvwp_*` em formatos como:
  - `.frm` (estrutura/metadata)
  - `.ibd` (dados InnoDB)

---

## ⚠️ Importante (portabilidade)

Pra versionar/transportar banco, o mais comum e recomendado é um **dump `.sql`**
(ex.: export via phpMyAdmin ou `mysqldump`).

Esses arquivos `.ibd/.frm` servem bem para **estudo de estrutura**, mas não são o formato mais simples de restaurar em qualquer máquina.

<p align="center"><sub>May&nbsp;the&nbsp;force&nbsp;be&nbsp;with&nbsp;you. 🌓</sub></p>
