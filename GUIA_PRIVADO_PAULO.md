# Guia privado do portfolio React

Este guia e pessoal e local. Ele esta ignorado em `.git/info/exclude`, entao nao deve ir para o GitHub.

## Nova estrutura

O portfolio agora usa React + Vite + TypeScript.

Arquivos principais:

- `index.html`: entrada do Vite. Normalmente voce nao precisa editar.
- `src/main.tsx`: monta o React no `#root`.
- `src/App.tsx`: organiza as secoes e estados globais.
- `src/components/`: componentes visuais e interativos.
- `src/data/`: listas editaveis de projetos, habilidades e certificados.
- `src/types/`: tipos TypeScript usados nos dados.
- `src/styles/`: CSS separado por area.
- `public/`: arquivos estaticos servidos pelo Vite, como imagens, videos, blog, favicon e CV.

## Rodar o projeto

Dentro de `portfolio_paulo_v2`:

```powershell
npm install
npm run dev
```

Depois abra:

```text
http://127.0.0.1:5173
```

Para gerar a versao final:

```powershell
npm run build
```

A pasta final sera `dist/`.

## Onde alterar conteudos

### Projetos

Edite:

```text
src/data/projects.ts
```

Cada projeto segue este modelo:

```ts
{
  title: 'Nome do projeto',
  image: '/img/imagem.png',
  imageAlt: 'Descricao da imagem',
  type: 'Software',
  badge: 'Solo',
  description: 'Descricao curta.',
  tags: ['React', 'TypeScript'],
  demoUrl: 'https://...',
  githubUrl: 'https://...',
}
```

Para projeto com video:

```ts
videoUrl: '/img/video.mp4'
```

As imagens e videos ficam em:

```text
public/img/
```

### Habilidades

Edite:

```text
src/data/skills.ts
```

Modelo:

```ts
{ name: 'JavaScript', category: 'software' }
```

Categorias atuais:

- `software`
- `hardware`
- `ferramentas`

Se criar uma nova categoria, tambem ajuste os filtros em:

```text
src/components/Skills.tsx
```

### Certificados & Conquistas

Edite:

```text
src/data/certificates.ts
```

Modelo:

```ts
{
  title: 'Nome do certificado',
  issuer: 'Instituicao',
  date: 'Concluido em mes de ano',
  href: '#',
  icon: 'award',
}
```

Icones disponiveis:

- `award`
- `book`
- `layers`

Se nao tiver link, remova `href`.

## Onde alterar textos

- Hero/apresentacao: `src/components/Hero.tsx`
- Sobre mim: `src/components/About.tsx`
- Contato: `src/components/Contact.tsx`
- Rodape: `src/components/Footer.tsx`
- Easter egg: `src/components/EasterEgg.tsx`

## Onde alterar estilos

- Variaveis de cor, fonte e base: `src/styles/base.css`
- Navbar/menu: `src/styles/navigation.css`
- Secoes principais: `src/styles/sections.css`
- Modais, botoes flutuantes e easter egg: `src/styles/components.css`
- Mobile/tablet: `src/styles/responsive.css`
- Modo curriculo/impressao: `src/styles/print.css`
- Entrada dos estilos: `src/styles/global.css`

Para mudar a cor de destaque, edite em `src/styles/base.css`:

```css
--clr-accent: #111110;
```

## GitHub Activity

Componente:

```text
src/components/GitHubActivity.tsx
```

Para trocar usuario, altere `PauloRicardo-05` nas URLs do `fetch`.

Para mudar a quantidade de repositorios, altere:

```text
per_page=3
```

## Modais

- Modal do card de projeto: `src/components/ProjectModal.tsx`
- Card reutilizavel: `src/components/ProjectCard.tsx`
- Modal de video: `src/components/VideoModal.tsx`

## Botao voltar ao topo e barra de scroll

A logica fica em:

```text
src/App.tsx
```

Procure por:

```ts
setShowBackToTop(scrollTop > 300)
```

Mude `300` se quiser que o botao apareca antes ou depois.

## Modo curriculo

A classe `print-mode` e controlada em:

```text
src/App.tsx
```

O visual fica em:

```text
src/styles/print.css
```

## Regra pratica

- Novo projeto, certificado ou habilidade: edite `src/data/`.
- Texto de uma secao: edite `src/components/`.
- Aparencia: edite `src/styles/`.
- Imagens, videos e PDF: coloque em `public/`.

## Checklist antes de publicar

1. Rode `npm run build`.
2. Abra o site local com `npm run dev`.
3. Teste tema claro/escuro.
4. Teste cards de projeto.
5. Teste modal de video.
6. Teste botao voltar ao topo.
7. Teste modo curriculo.
8. Confira se GitHub Activity carregou.
