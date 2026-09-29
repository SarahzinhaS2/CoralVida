# CoralVida

Site da ONG CoralVida, que trabalha para proteger os recifes de corais e ajudar na preservação dos oceanos. Projeto de faculdade feito com HTML, CSS e JavaScript, com build feito pelo Vite.

Site publicado: https://coral-vida.vercel.app/

## Páginas

- Início
- Projetos
- Cadastro

## Recursos

- Menu responsivo (menu hambúrguer em telas pequenas)
- Modo de alto contraste
- Formulário de cadastro com validação (nome e e-mail ficam salvos no localStorage)
- Imagens em WebP com três tamanhos (400, 800 e 1200 px) e JPG de reserva

## Tecnologias

- HTML, CSS e JavaScript (módulos ES)
- Vite (build e minificação)

## Como rodar no computador

```bash
npm install
npm run dev
```

Para gerar a versão de produção e testá-la:

```bash
npm run build
npm run preview
```

## Estrutura

- `html/`: páginas do site
- `css/`: estilos
- `js/`: scripts
- `imagens/`: imagens
- `public/`: página de redirecionamento para `html/index.html`

## Deploy

O projeto está na Vercel, ligada a este repositório. A cada push na branch `main`, a Vercel roda o build (`vite build`) e publica a pasta `dist` automaticamente.