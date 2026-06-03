# Portfolio Paulo Ricardo

Aplicacao React + Vite + TypeScript do portfolio pessoal de Paulo Ricardo.

## O que esta incluido

- Hero com foto, links e modo curriculo.
- Secao Sobre mim.
- Certificados & Conquistas.
- Habilidades clicaveis que filtram os projetos.
- Projetos com modal de foco e demonstracao em video.
- GitHub Activity com repositorios recentes via API publica.
- Contato, footer, tema claro/escuro, barra de progresso, botao voltar ao topo e easter egg.

## Comandos

```powershell
npm install
npm run dev
npm run build
npm run preview
```

## Desenvolvimento

```txt
src/components/   Componentes da interface
src/data/         Dados editaveis do portfolio
src/styles/       CSS separado por area
src/types/        Tipos TypeScript
public/           Arquivos estaticos servidos pelo Vite
```

## Dados editaveis

### Projetos

Edite `src/data/projects.ts`.

```ts
{
  title: 'Nome do projeto',
  image: '/img/projeto.png',
  imageAlt: 'Descricao da imagem',
  type: 'Software',
  badge: 'Solo',
  description: 'Resumo do projeto.',
  tags: ['React', 'TypeScript'],
  demoUrl: 'https://...',
  githubUrl: 'https://...',
}
```

### Habilidades

Edite `src/data/skills.ts`.

As habilidades sao usadas tambem como filtro dos projetos. Para o filtro funcionar, o nome da habilidade precisa bater com uma tag em `projects.ts`.

Exemplo:

```ts
{ name: 'JavaScript', category: 'software' }
```

E no projeto:

```ts
tags: ['JavaScript']
```

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

## Publicacao

Gere o build:

```powershell
npm run build
```

Publique o conteudo gerado em `dist/` conforme a estrategia de deploy do repositorio.
