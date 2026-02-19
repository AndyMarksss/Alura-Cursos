<div align="center">

# 🌿 Git & GitHub — projeto + guia

Projeto prático para treinar versionamento e fluxo Git/GitHub.
Aqui também fica um **guia de comandos** (no próprio README e no `comandos-git.html`).

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
- DOM (`querySelector`, `getElementById`)
- controle de tentativas e reinício
- sorteio sem repetição com `listaDeNumerosSorteados.includes()`
- leitura em voz com `responsiveVoice.speak(...)`

### ▶️ Rodando
Abra `index.html` (Live Server recomendado).

---

## Comandos Git Essenciais (versões 2.23 +)

> Desde o Git 2.23 (agosto / 2019), o clássico **`git checkout`** foi dividido em dois comandos mais específicos — **`git switch`** e **`git restore`** — para tornar a interface mais coerente.  
> Os exemplos abaixo já refletem essa divisão, mas mantêm o **`git checkout`** (marcado como *legado*) caso você trabalhe em versões mais antigas.

### 📄 Visualizar estado e histórico
| Comando               | Descrição                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `git status`          | Mostra o estado do diretório de trabalho, arquivos no *stage* e branch atual.                                                |
| `git diff`            | Exibe as diferenças entre arquivos modificados e o último commit.                                                            |
| `git diff --help`     | Abre a documentação do `git diff`.                                                                                           |
| `git log`             | Exibe o histórico completo de commits com autor, data e mensagem (adicione `<branch>` para ver o histórico de outra branch). |
| `git log --oneline`   | Histórico de commits resumido (um commit por linha).                                                                         |
| `git blame <arquivo>` | Mostra quem alterou cada linha de um arquivo, exibindo o commit responsável.                                                 |
| `git show <hash>`     | Exibe detalhes de um commit específico (autor, data, mensagem, diff).                                                        |

### ✍️ Adicionar e confirmar mudanças
| Comando                    | Descrição                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `git add <arquivo>`        | Adiciona um arquivo específico ao *stage* (área de preparação).                           |
| `git add .`                | Adiciona **todos** os arquivos modificados no diretório atual ao *stage*.                 |
| `git commit -m "mensagem"` | Cria um novo commit com a mensagem fornecida.                                             |
| `git commit`               | Abre o editor padrão para escrever a mensagem e cria o commit com as mudanças no *stage*. |

### 🔄 Restaurar ou descartar alterações
| Comando                                   | Descrição                                                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| `git restore <arquivo>`                   | Descarta mudanças locais em `<arquivo>` (volta ao estado do último commit).                   |
| `git restore .`                           | Restaura **todos** os arquivos modificados no diretório atual para o estado do último commit. |
| `git restore --staged <arquivo>`          | Remove `<arquivo>` do *stage* sem alterar o conteúdo no diretório de trabalho.                |
| `git restore --source <commit> <arquivo>` | Restaura `<arquivo>` para o estado que tinha em um commit específico.                         |
| `git checkout -- .`                       | *Legado*: desfaz alterações em todos os arquivos modificados (equivale a `git restore .`).    |

### 📦 Trabalhar com *stash*
| Comando                        | Descrição                                                           |
| ------------------------------ | ------------------------------------------------------------------- |
| `git stash`                    | Salva temporariamente todas as alterações que não foram commitadas. |
| `git stash push -m "mensagem"` | Salva as alterações atuais no *stash* com uma mensagem descritiva.  |
| `git stash list`               | Lista todas as entradas salvas no *stash*.                          |
| `git stash apply <índice>`     | Aplica uma entrada específica do *stash* (mantém-na na lista).      |
| `git stash pop`                | Aplica a entrada mais recente do *stash* **e** a remove da lista.   |
| `git stash drop <índice>`      | Remove uma entrada específica do *stash* sem aplicá-la.             |
| `git stash clear`              | Remove **todas** as entradas do *stash*.                            |

### 🌿 Gerenciar branches
| Comando                         | Descrição                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `git branch`                    | Lista todas as branches.                                                                           |
| `git branch <nova-branch>`      | Cria uma nova branch **sem** mudar para ela.                                                       |
| `git branch -m <antigo> <novo>` | Renomeia uma branch.                                                                               |
| `git branch -d <branch>`        | Exclui uma branch já mesclada.                                                                     |
| `git switch <branch>`           | **(recomendado)** Alterna para a branch indicada.                                                  |
| `git switch -c <branch>`        | **(recomendado)** Cria e alterna para uma nova branch.                                             |
| `git checkout <branch>`         | *Legado*: alterna para `<branch>` (prefira `git switch`).                                          |
| `git checkout -b <branch>`      | *Legado*: cria e alterna para `<branch>` (prefira `git switch -c`).                                |
| `git checkout`                  | *Legado*: comando multifuncional para trocar de branch, restaurar arquivos ou inspecionar commits. |

### 🔀 Integração de branches e histórico
| Comando                    | Descrição                                                                         |
| -------------------------- | --------------------------------------------------------------------------------- |
| `git merge <branch>`       | Integra as alterações de `<branch>` na branch atual, mantendo commits separados.  |
| `git rebase <branch-base>` | Reescreve o histórico aplicando os commits da branch atual sobre `<branch-base>`. |
| `git cherry-pick <hash>`   | Aplica as mudanças introduzidas por um commit específico na branch atual.         |

### 🏷️ Trabalhar com tags
| Comando                                  | Descrição                                                  |
| ---------------------------------------- | ---------------------------------------------------------- |
| `git tag`                                | Lista todas as tags existentes no repositório.             |
| `git tag <nome-da-tag>`                  | Cria uma tag **leve** no commit atual (*HEAD*).            |
| `git tag <nome-da-tag> <hash>`           | Cria uma tag **leve** em um commit específico.             |
| `git tag -a <nome-da-tag> -m "mensagem"` | Cria uma tag **anotada** com mensagem, autor e data.       |
| `git tag -d <nome-da-tag>`               | Remove uma tag local.                                      |
| `git tag -v <nome-da-tag>`               | Exibe detalhes e verifica a assinatura de uma tag anotada. |

### ☁️ Enviar para o repositório remoto
| Comando                               | Descrição                                                       |
| ------------------------------------- | --------------------------------------------------------------- |
| `git push origin main`                | Envia a branch `main` para o remoto `origin`.                   |
| `git push origin <branch>`            | Envia a branch especificada para o remoto `origin`.             |
| `git push origin <branch1> <branch2>` | Envia **várias** branches de uma só vez para o remoto `origin`. |
| `git push origin <tag>`               | Envia a tag indicada para o remoto `origin`.                    |
| `git push origin --tags`              | Envia **todas** as tags para o remoto `origin`.                 |


---

<p align="center"><sub>May&nbsp;the&nbsp;force&nbsp;be&nbsp;with&nbsp;you. 🌓</sub></p>