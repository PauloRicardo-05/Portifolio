# Portfólio (GitHub Pages ready)

Site pessoal pronto para deploy no GitHub Pages a partir da pasta `portfolio_paulo_v2`.

## Como publicar

1. Configure o repositório no GitHub.
2. Deixe a branch `main` com os arquivos deste projeto.
3. A ação de deploy irá gerar a branch `gh-pages` automaticamente quando você fizer push.
4. Em **Settings → Pages**, escolha **Branch: gh-pages** e salve.

> O deploy está automatizado via `.github/workflows/deploy.yml`.

## Onde editar

- `portfolio_paulo_v2/index.html` — página principal
- `portfolio_paulo_v2/css/style.css` — estilos
- `portfolio_paulo_v2/js/main.js` — comportamento do site
- `portfolio_paulo_v2/img/` — imagens e placeholders

## Observações

- O botão de CV está apontando para `portfolio_paulo_v2/cv/paulo-ricardo-cv.pdf` por enquanto.
- Quando adicionar a sua foto, troque `portfolio_paulo_v2/img/profile-placeholder.svg` pelo arquivo real e mantenha o mesmo nome ou atualize o `src`.
