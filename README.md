# Portfolio Paulo Ricardo

Aplicacao React + Vite + TypeScript do portfolio pessoal de Paulo Ricardo.

## Visao geral

- Interface responsiva com tema claro/escuro.
- Hero com foto, chamada principal e modo curriculo.
- Secoes de sobre, certificados, habilidades, projetos, GitHub Activity e contato.
- Projetos com filtros, modal de foco e demonstracao em video.
- Deploy automatico no GitHub Pages via GitHub Actions.

## Comandos

```powershell
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura

```txt
src/components/   Componentes da interface
src/data/         Conteudo editavel do portfolio
src/styles/       CSS separado por area
src/types/        Tipos TypeScript
src/utils/        Helpers compartilhados
public/           Arquivos estaticos publicados pelo Vite
```

Use `public/` para imagens, videos, favicon, posts estaticos e CV. Nao duplique esses arquivos na raiz do projeto.

## Dados editaveis

### Projetos

Edite `src/data/projects.ts`.

```ts
{
  title: 'Nome do projeto',
  image: assetPath('/img/projeto.png'),
  imageAlt: 'Descricao da imagem',
  type: 'Software',
  badge: 'Solo',
  description: 'Resumo do projeto.',
  tags: ['React', 'TypeScript'],
  demoUrl: 'https://...',
  githubUrl: 'https://...',
}
```

Para projeto com video:

```ts
videoUrl: assetPath('/img/video.mp4')
```

Os arquivos ficam em `public/img/`. O helper `assetPath` garante que os caminhos funcionem no GitHub Pages dentro de `/Portifolio/`.

### Habilidades

Edite `src/data/skills.ts`.

As habilidades tambem funcionam como filtro dos projetos. Para o filtro funcionar, o nome da habilidade precisa bater com uma tag em `projects.ts`.

### Certificados

Edite `src/data/certificates.ts`.

```ts
{
  title: 'Nome do certificado',
  issuer: 'Instituicao',
  date: 'Concluido em marco de 2025',
  href: '#',
  icon: 'award',
}
```

## Deploy

O fluxo correto e:

1. Trabalhar e fazer push na branch `main`.
2. O GitHub Actions roda `npm run build`.
3. O conteudo de `dist/` e publicado automaticamente na branch `gh-pages`.
4. O GitHub Pages serve a branch `gh-pages`.

Nao edite a branch `gh-pages` manualmente; ela e gerada pelo workflow.
