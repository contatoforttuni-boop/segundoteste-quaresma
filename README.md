# Quaresma de São Miguel 2026

Página de vendas Direct Response, responsiva e pronta para publicação na Vercel.

## O que já está configurado

- layout otimizado para celular, tablet e notebook;
- fontes locais Lora, Manrope e Inter;
- contribuição de R$ 29,90;
- checkout integrado à Hotmart;
- materiais reais em WebP otimizado;
- metadados de compartilhamento;
- configuração da Vercel em `vercel.json`.

## Publicar pela Vercel

### Opção 1 - Importar do GitHub

1. Crie um repositório no GitHub e envie todos os arquivos deste projeto.
2. Na Vercel, clique em **Add New > Project**.
3. Importe o repositório.
4. A Vercel reconhecerá o projeto como Next.js e usará as configurações de `vercel.json`.
5. Clique em **Deploy**.

### Opção 2 - Vercel CLI

```bash
npm install
npx vercel --prod
```

## Rodar no computador

```bash
npm install
npm run dev:vercel
```

Depois, abra `http://localhost:3000`.

## Validação para Vercel

```bash
npm run build:vercel
```

## Ajustes rápidos

- Checkout Hotmart: altere `CHECKOUT_URL` no início de `app/page.tsx`.
- Widget da Hotmart: carregado em `app/layout.tsx`.
- Preço principal: procure por `price` em `app/page.tsx`.
- Preço da barra móvel: procure por `mobile-sticky` em `app/page.tsx`.
- Textos e seções: `app/page.tsx`.
- Cores, tipografia e responsividade: `app/globals.css`.

## Estrutura principal

- `app/page.tsx`: conteúdo e estrutura da página;
- `app/globals.css`: identidade visual e breakpoints responsivos;
- `app/layout.tsx`: metadados e carregamento das fontes;
- `public/materials/`: imagens otimizadas dos produtos;
- `vercel.json`: configuração de deploy.
