# Evolux360 Landing Page

Este é o código completo da landing page para o MVP da plataforma Evolux360, um sistema de gestão empresarial integrado e automatizado.

## Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Iniciar o Projeto](#como-iniciar-o-projeto)
5. [Solução para Problemas com Tailwind CSS](#solução-para-problemas-com-tailwind-css)
6. [Como Adicionar Suas Imagens](#como-adicionar-suas-imagens)
7. [Conectar com GitHub](#conectar-com-github)
8. [Publicar no Vercel](#publicar-no-vercel)

## Visão Geral

A landing page da Evolux360 foi desenvolvida com base no design do Figma, incluindo todas as seções necessárias:

- Header com navegação
- Hero section com formulário de contato
- Seção de recursos
- Seção "Por que a Evolux?"
- Seção de benefícios
- CTA (Call to Action) com link para WhatsApp
- Seção de FAQ
- Footer com informações de contato

## Tecnologias Utilizadas

- React (com Vite)
- Tailwind CSS para estilização e responsividade
- React Helmet para SEO

## Estrutura do Projeto

```
evolux360-landing/
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── WhyEvolux.jsx
│   │   ├── Benefits.jsx
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── styles/           # Arquivos CSS
│   │   └── global.css    # Estilos globais e configuração do Tailwind
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada da aplicação
├── tailwind.config.js    # Configuração do Tailwind CSS
└── package.json          # Dependências e scripts
```

## Como Iniciar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Extraia o arquivo ZIP em uma pasta no seu computador
2. Abra a pasta no VS Code
3. Abra o terminal CMD (não PowerShell) e execute:

```bash
# Navegue até a pasta do projeto (ajuste o caminho conforme necessário)
cd caminho/para/evolux360-landing

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Solução para Problemas com Tailwind CSS

Se você encontrar problemas com o Tailwind CSS, siga estas etapas:

### Problema 1: Erro de sintaxe no arquivo tailwind.css

Se você receber um erro como `[SyntaxError] Invalid or unexpected token` no arquivo tailwind.css:

1. Verifique se o arquivo `src/styles/global.css` contém exatamente:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   
2. Se o erro persistir, execute os seguintes comandos no terminal CMD (não PowerShell):
   ```bash
   npm uninstall tailwindcss postcss autoprefixer
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

### Problema 2: Erro de execução de scripts no Windows

Se você receber um erro como `O termo 'npm' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável`:

1. Use o CMD em vez do PowerShell:
   - Feche o VS Code
   - Abra o Prompt de Comando (CMD) como administrador
   - Navegue até a pasta do projeto e execute os comandos

2. Ou habilite a execução de scripts no PowerShell:
   - Abra o PowerShell como administrador
   - Execute: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - Digite "S" para confirmar

## Como Adicionar Suas Imagens

1. Coloque suas imagens na pasta `src/assets/`
2. As imagens necessárias são:
   - `logo-header.svg` - Logo para o cabeçalho
   - `logo-footer.svg` - Logo para o rodapé
   - `hero-image.png` - Imagem principal da seção hero

Os componentes já estão configurados para usar estas imagens nos caminhos corretos.

## Conectar com GitHub

1. Crie um novo repositório no GitHub
2. Inicialize o Git na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Versão inicial da landing page Evolux360"
   ```
3. Conecte ao repositório remoto:
   ```bash
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git branch -M main
   git push -u origin main
   ```

## Publicar no Vercel

### Opção 1: Deploy direto do GitHub

1. Crie uma conta no [Vercel](https://vercel.com/)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. O Vercel detectará automaticamente que é um projeto Vite/React
5. Clique em "Deploy"

### Opção 2: Deploy usando Vercel CLI

1. Instale a Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Na pasta do projeto, execute:
   ```bash
   vercel
   ```
3. Siga as instruções na tela

Após o deploy, o Vercel fornecerá uma URL para acessar sua landing page.
