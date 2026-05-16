# Portfólio — Engenharia da Computação

Portfólio pessoal hospedado no GitHub Pages.  
Feito com HTML, CSS e JavaScript puros — sem frameworks, sem dependências.

## Estrutura

```
portfolio_paulo_v2/
├── index.html          # Página principal
├── css/
│   └── style.css       # Todos os estilos
├── js/
│   └── main.js         # Theme toggle, filtros, scroll spy
├── img/
│   └── profile-placeholder.svg
└── blog/               # artigos locais
```

## Como personalizar

1. **Troque `[SEU NOME]`** em `index.html` e na tag `<title>`
2. **Hero**: edite a descrição em `#hero`
3. **Sobre**: atualize os textos em `#sobre`
4. **Habilidades**: adicione ou remova `.skill-pill` no `#habilidades`
5. **Projetos**: duplique um `.proj-card` e preencha com seus dados
6. **Contato**: troque os `href` pelos seus links reais

## Tipos de card de projeto

- **Solo + código público**: usa `.badge-solo` + links para demo e GitHub
- **Equipe / código privado**: usa `.badge-team` + `.proj-contribution` + link para demo ou vídeo
- **Hardware (Arduino)**: mesma estrutura, com foto do hardware no `.proj-thumb`

## Como hospedar no GitHub Pages

O deploy está configurado para publicar o conteúdo de `portfolio_paulo_v2` automaticamente.

1. Faça push para a branch `main`.
2. A ação GitHub Workflow em `.github/workflows/deploy.yml` criará/atualizará a branch `gh-pages`.
3. Em **Settings → Pages**, carregue a branch **gh-pages**.

## Adicionar imagens dos projetos

Coloque as imagens em `portfolio_paulo_v2/img/` e no card substitua o bloco de ícone por:

```html
<img src="img/nome-do-projeto.gif" alt="Descrição do projeto">
```

GIFs curtos (5–10s) funcionam muito bem para mostrar sistemas em funcionamento.
