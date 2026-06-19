
<div align="center">
  <img src="https://img.shields.io/badge/Espeto_Gepeto-🔥-orange?style=for-the-badge&logoColor=white" alt="Logo Espeto Gepeto" />
  
  <p align="center">
    <strong>A vitrine digital moderna para explorar o cardápio, produtos em destaque e entrar em contato com a espetaria!</strong>
  </p>

  <p align="center">
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-demonstração--hospedagem">Hospedagem</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-arquitetura-e-pastas">Estrutura</a> •
    <a href="#-passo-a-passo-de-instalação-e-execução">Instalação</a> •
    <a href="#-contribuidores">Contribuidores</a>
  </p>

  <img src="https://img.shields.io/github/stars/mantuanpietro/espeto-gepeto?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/mantuanpietro/espeto-gepeto?style=social" alt="Forks" />
  <img src="https://img.shields.io/github/license/mantuanpietro/espeto-gepeto?style=flat-square&color=orange" alt="License" />
</div>

---

## 📝 Sobre o Projeto

O **Espeto Gepeto** é uma aplicação web desenvolvida para funcionar como a porta de entrada digital de uma espetaria contemporânea. O objetivo principal do projeto é oferecer aos clientes uma experiência visual atraente e fluida para conhecer as opções da casa, os principais produtos e facilitar o canal de comunicação direto com o estabelecimento.

---

## 🌐 Demonstração & Hospedagem

O projeto já está publicado e pronto para uso! Você pode acessar a aplicação online através do link abaixo:

🔗 **Link do Projeto:** [Acessar Espeto Gepeto na Vercel](https://espeto-gepeto.vercel.app/?authuser=0)

### 📸 Prévia da Interface
<div align="center">
  <img src="/public/previa.png" />
  <p><em>Interface interativa: Cardápio responsivo e visualização de produtos.</em></p>
</div>

---

## ✨ Funcionalidades do Projeto

O sistema conta com as seguintes seções estruturadas para o usuário final:

* 📖 **Cardápio de Produtos completo:** Listagem organizada e visual de todos os espetos, bebidas e acompanhamentos disponíveis, facilitando a escolha do cliente.
* ⭐ **Produtos em Destaque:** Espaço na página principal reservado para destacar os carros-chefes da espetaria.
* 📞 **Página de Contato:** Seção dedicada com informações de localização, horários de funcionamento e canais de atendimento direto.
* 📱 **Design Responsivo:** Interface otimizada tanto para telas de computadores quanto para smartphones (ideal para o cliente consultar o cardápio direto do celular).

---

## 🛠 Tecnologias Utilizadas

| Camada | Tecnologia | Badge |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Estilização** | Tailwind CSS | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Hospedagem** | Vercel | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |
| **Gerenciador** | NPM | ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white) |

---

## 📐 Arquitetura e Pastas

A organização de pastas reflete a divisão das páginas e componentes de exibição:

```bash
espeto-gepeto/
├── 📁 public/            # Imagens dos espetos, ícones e logos do estabelecimento
├── 📁 src/               # Código-fonte principal do app
│   ├── 📁 components/    # Componentes reutilizáveis (Header, Footer, Card de Espeto)
│   ├── 📁 pages/         # Telas principais (Home, Cardápio, Contato)
│   └── 📁 styles/        # Estilos globais e temas do Tailwind
├── 📄 package.json       # Scripts de execução e dependências
└── 📄 tailwind.config.js # Customizações visuais do tema do projeto
---
````
##🚀 Passo a Passo de Instalação e Execução

```bash
📋 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:

Git

Node.js (versão 18.x ou superior)

NPM (gerenciador padrão do Node)

🛠️ Execução Local
1. Clonar o Repositório
Abra o seu terminal e execute:

Bash
git clone [https://github.com/mantuanpietro/espeto-gepeto.git](https://github.com/mantuanpietro/espeto-gepeto.git)
2. Acessar a Pasta
Navegue até o diretório do projeto:

Bash
cd espeto-gepeto
3. Instalar Dependências
Baixe os pacotes necessários:

Bash
npm install
4. Iniciar o Servidor de Desenvolvimento
Coloque o projeto para rodar:

Bash
npm run dev
💻 Acessando o App
Assim que a inicialização terminar, abra seu navegador e digite o endereço:
👉 http://localhost:3000
