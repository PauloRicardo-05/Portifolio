# Portfólio — Engenharia da Computação

Portfólio pessoal hospedado no GitHub Pages.  
Feito com HTML, CSS e JavaScript puros — sem frameworks, sem dependências.

## Estrutura

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── style.css       # Todos os estilos
├── js/
│   └── main.js         # Theme toggle, filtros, scroll spy
└── assets/
    └── img/            # Imagens e GIFs dos projetos
```

## Como personalizar

1. **Troque `[SEU NOME]`** em `index.html` e na tag `<title>`
2. **Hero**: edite a descrição em `#hero`
3. **Sobre**: atualize os textos e os números nos `.stat-card`
4. **Habilidades**: adicione ou remova `.skill-pill` no `#habilidades`
5. **Projetos**: duplique um `.proj-card` e preencha com seus dados
6. **Blog**: adicione seus artigos na lista `.blog-list`
7. **Contato**: troque os `href` pelos seus links reais

## Tipos de card de projeto

- **Solo + código público**: usa `.badge-solo` + links para demo e GitHub
- **Equipe / código privado**: usa `.badge-team` + `.proj-contribution` + link para demo ou vídeo
- **Hardware (Arduino)**: mesma estrutura, com foto do hardware no `.proj-thumb`

## Como hospedar no GitHub Pages

1. Crie um repositório chamado `seu-usuario.github.io`
2. Suba todos os arquivos na branch `main`
3. Acesse `https://seu-usuario.github.io`

Ou use um repositório qualquer e ative GitHub Pages em  
**Settings → Pages → Source: main / (root)**

## Adicionar imagens dos projetos

Coloque as imagens em `assets/img/` e no card substitua o bloco de ícone por:

```html
<img src="assets/img/nome-do-projeto.gif" alt="Descrição do projeto">
```

GIFs curtos (5–10s) funcionam muito bem para mostrar sistemas em funcionamento.
