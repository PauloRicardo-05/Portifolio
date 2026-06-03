# Paulo Ricardo | Portfolio

Portfolio pessoal desenvolvido para apresentar projetos, habilidades, certificados e atividade real no GitHub.

A proposta do site e reunir em uma experiencia simples e responsiva os principais trabalhos de Paulo Ricardo, estudante de Engenharia da Computacao, com foco em desenvolvimento web, interfaces responsivas e projetos que conectam software e hardware.

## Destaques

- Interface responsiva com tema claro e escuro.
- Cards de projetos com foco em modal.
- Filtro de projetos por habilidade clicavel.
- Secao de certificados e conquistas.
- Integracao com a API publica do GitHub.
- Botao voltar ao topo e barra de progresso de scroll.
- Easter egg com Konami Code.
- Modo curriculo para impressao/exportacao em PDF.

## Tecnologias

- React
- TypeScript
- Vite
- CSS modularizado
- GitHub API

## Estrutura

```txt
portfolio_paulo_v2/
  public/              # imagens, videos, favicon, blog e arquivos estaticos
  src/
    components/        # componentes React
    data/              # projetos, habilidades e certificados
    styles/            # CSS separado por responsabilidade
    types/             # tipos TypeScript
    App.tsx            # composicao principal da pagina
    main.tsx           # entrada do React
```

## Rodando localmente

```powershell
cd portfolio_paulo_v2
npm install
npm run dev
```

Abra no navegador:

```txt
http://127.0.0.1:5173
```

Para expor na rede local:

```powershell
npm run dev -- --host 0.0.0.0
```

## Build de producao

```powershell
npm run build
```

A versao final sera gerada em:

```txt
portfolio_paulo_v2/dist
```

## Edicao rapida

- Projetos: `portfolio_paulo_v2/src/data/projects.ts`
- Habilidades: `portfolio_paulo_v2/src/data/skills.ts`
- Certificados: `portfolio_paulo_v2/src/data/certificates.ts`
- Textos das secoes: `portfolio_paulo_v2/src/components/`
- Estilos: `portfolio_paulo_v2/src/styles/`

## Autor

**Paulo Ricardo**

- GitHub: [PauloRicardo-05](https://github.com/PauloRicardo-05)
- LinkedIn: [Paulo Ricardo](https://www.linkedin.com/in/paulo-ricardo-9439a9263/)
- E-mail: [pr54582@gmail.com](mailto:pr54582@gmail.com)
