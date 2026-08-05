# Portfólio — jogos, aplicativos e experiências web

Portfólio construído com Next.js, React, TypeScript, Tailwind CSS, Framer Motion e Lucide React. Todo o conteúdo de apresentação já foi preenchido com foco em jogos, aplicativos, desenvolvimento web, UX, responsividade e código limpo.

A única seção deixada vazia de propósito é **Projetos**.

## Como executar

```powershell
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Personalização essencial

Abra `lib/data.ts` e altere apenas o objeto `profile`:

```ts
export const profile = {
  name: "Seu Nome",
  shortName: "SN",
  role: "Desenvolvedor de jogos, aplicativos e experiências web",
  email: "seuemail@exemplo.com",
  location: "Brasil",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  availability: "Disponível para novos projetos e oportunidades",
};
```

Também substitua `Seu Nome` e `https://seu-dominio.com` em `app/layout.tsx`.

## Como cadastrar projetos

Arquivo: `lib/data.ts`

A lista começa vazia:

```ts
export const projects: Project[] = [];
```

Substitua por:

```ts
export const projects: Project[] = [
  {
    title: "Nome do projeto",
    description:
      "Explique o problema, a experiência criada e o principal resultado do projeto.",
    category: "Jogo",
    tags: ["Next.js", "TypeScript", "Pixel Art"],
    image: "/projects/nome-do-projeto.webp",
    liveUrl: "https://seu-projeto.com",
    repositoryUrl: "https://github.com/seu-usuario/repositorio",
    featured: true,
  },
];
```

Categorias aceitas:

```ts
"Jogo"
"Aplicativo"
"Aplicação web"
```

Coloque as imagens em:

```text
public/projects/
```

## Estrutura

```text
portfolio-next/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/header.tsx
│   ├── sections/content.tsx
│   ├── sections/hero.tsx
│   ├── ui/button.tsx
│   ├── reveal.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── public/projects/
└── package.json
```

## Validação antes do deploy

```powershell
npm run lint
npm run format:check
npm run build
```

## Deploy na Vercel

1. Publique o projeto em um repositório no GitHub.
2. Entre na Vercel e importe o repositório.
3. A Vercel identificará o Next.js automaticamente.
4. Clique em **Deploy**.
5. Atualize o domínio em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`.
