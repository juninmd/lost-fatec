# lost-fatec

Trabalho do professor Fausto. Front e API no mesmo repositório: o `lost-fatec-api` foi
absorvido aqui via `git subtree`, com o histórico de commits original preservado.

| pasta | origem | stack |
|---|---|---|
| `web/` | este repositório | Angular (`.angular-cli.json`, Karma, Protractor) |
| `api/` | `lost-fatec-api` | Node + Express + MongoDB (`kernel/`, `mongoInit.js`) |

O conteúdo que antes ficava na raiz foi para `web/`. O `.github/` continua na raiz,
para que os workflows sigam rodando.

```bash
cd web && yarn && yarn start   # front (ng serve)
cd api && yarn && node app.js  # api
```
