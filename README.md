# Portfólio — Paulo Ricardo

> Portfólio pessoal desenvolvido para apresentar minha trajetória, projetos, habilidades, certificados e formas de contato em uma experiência web responsiva.

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat&logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/Licença-MIT-22c55e?style=flat)](LICENSE)

**[Ver portfólio online](https://pauloricardo-05.github.io/Portifolio/)** · **[LinkedIn](https://www.linkedin.com/in/paulo-ricardo-9439a9263/)** · **[Contato](mailto:pr54582@gmail.com)**

---

## Sobre o projeto

Este repositório contém o código-fonte do meu portfólio pessoal. A proposta é reunir, em um único lugar, meus principais projetos, certificados, habilidades e links profissionais, mantendo uma base simples de atualizar e publicar.

O projeto foi construído com React, TypeScript e Vite, com CSS modularizado por área da interface. O deploy é automatizado via GitHub Actions: todo push na branch `main` gera o build e publica o resultado na branch `gh-pages`.

---

## Funcionalidades

- **Hero com apresentação** — foto, chamada principal, links rápidos e modo currículo.
- **Seção Sobre mim** — resumo da trajetória e dados de destaque.
- **Certificados & Conquistas** — cards editáveis para formações, cursos e reconhecimentos.
- **Habilidades filtráveis** — tags que também filtram os projetos relacionados.
- **Projetos em cards** — links para demo, GitHub e modal de foco.
- **Demonstração em vídeo** — suporte a vídeo de projeto em modal.
- **GitHub Activity** — busca repositórios recentes pela API pública do GitHub.
- **Tema claro/escuro** — preferência salva no navegador.
- **Modo currículo** — visual simplificado para apresentação/impressão.

---

## Stack

- **React** — componentes funcionais e estado com hooks.
- **TypeScript** — tipagem para dados do portfólio e contratos entre componentes.
- **Vite** — desenvolvimento local e build de produção.
- **CSS puro** — custom properties, grid, flexbox, responsividade e tema.
- **GitHub Pages** — publicação estática via branch `gh-pages`.

---

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/PauloRicardo-05/Portifolio.git
cd Portifolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
# → http://localhost:5173
```

```bash
# Build de produção
npm run build

# Prévia local do build
npm run preview
```

---

## Estrutura

```txt
src/
├── components/          # Componentes visuais e interativos
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Certificates.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── VideoModal.tsx
│   ├── GitHubActivity.tsx
│   ├── Contact.tsx
│   └── Navbar.tsx
├── data/                # Conteúdo editável do portfólio
│   ├── projects.ts
│   ├── skills.ts
│   └── certificates.ts
├── styles/              # CSS separado por área da interface
│   ├── base.css
│   ├── navigation.css
│   ├── sections.css
│   ├── components.css
│   ├── responsive.css
│   └── print.css
├── types/               # Tipos TypeScript compartilhados
├── utils/               # Helpers do projeto
└── main.tsx             # Entrada da aplicação React

public/
├── img/                 # Imagens e vídeos usados no portfólio
├── blog/                # Posts estáticos
├── cv/                  # Arquivo de currículo em PDF
└── favicon.svg
```

---

## Atualizando conteúdo

### Projetos

Edite `src/data/projects.ts`.

```ts
{
  title: 'Nome do projeto',
  image: assetPath('/img/projeto.png'),
  imageAlt: 'Descrição da imagem',
  type: 'Software',
  badge: 'Solo',
  description: 'Resumo do projeto.',
  tags: ['React', 'TypeScript'],
  demoUrl: 'https://...',
  githubUrl: 'https://...',
}
```

Para projetos com vídeo:

```ts
videoUrl: assetPath('/img/video.mp4')
```

Os arquivos referenciados devem ficar em `public/img/`. O helper `assetPath` garante que os caminhos funcionem corretamente no GitHub Pages dentro de `/Portifolio/`.

### Certificados

Edite `src/data/certificates.ts`.

```ts
{
  title: 'Nome do certificado',
  issuer: 'Instituição',
  date: 'Concluído em março de 2025',
  href: '#',
  icon: 'award',
}
```

### Currículo

Coloque o PDF em:

```txt
public/cv/paulo-ricardo-cv.pdf
```

O botão de download do portfólio já aponta para esse caminho.

---

## Decisões de arquitetura

**Dados separados da interface** — projetos, habilidades e certificados ficam em `src/data/`, facilitando manutenção sem mexer na estrutura dos componentes.

**Assets públicos centralizados** — imagens, vídeos, posts estáticos, favicon e currículo ficam em `public/`, que é copiado diretamente pelo Vite para o build final.

**Helper para caminhos no GitHub Pages** — arquivos públicos são referenciados com `assetPath`, evitando problemas com o prefixo `/Portifolio/` usado no deploy.

**CSS modular por responsabilidade** — os estilos foram separados em arquivos por área para facilitar ajustes visuais pontuais sem transformar o CSS em um bloco único.

**Deploy automatizado** — a branch `main` guarda o código-fonte. A branch `gh-pages` é gerada automaticamente pelo workflow e não precisa ser editada manualmente.

---

## Deploy

O fluxo de publicação é:

1. Faça alterações na branch `main`.
2. Rode `npm run build` para validar localmente.
3. Faça commit e push para `main`.
4. O GitHub Actions gera o build.
5. O conteúdo de `dist/` é publicado na branch `gh-pages`.

---

## Autor

**Paulo Ricardo Oliveira Santos**

Estudante de Engenharia da Computação, com interesse em desenvolvimento web, interfaces, sistemas e projetos que conectam software e hardware.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-PauloRicardo-0077b5?style=flat&logo=linkedin)](https://www.linkedin.com/in/paulo-ricardo-9439a9263/)
[![GitHub](https://img.shields.io/badge/GitHub-PauloRicardo-181717?style=flat&logo=github)](https://github.com/PauloRicardo-05)
[![Email](https://img.shields.io/badge/Email-pr54582%40gmail.com-ea4335?style=flat&logo=gmail&logoColor=white)](mailto:pr54582@gmail.com)

---

## Licença

MIT — livre para usar, estudar e adaptar.
