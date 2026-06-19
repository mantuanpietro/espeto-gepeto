

<div align="center">
  <img src="https://img.shields.io/badge/Espeto_Gepeto-🔥-orange?style=for-the-badge&logoColor=white" alt="Logo Espeto Gepeto" />
  
  <p align="center">
    <strong>Transformando o controle de pedidos, brasa e estoque em uma experiência automatizada e dinâmica!</strong>
  </p>

  <p align="center">
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-demonstração--hospedagem">Hospedagem</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-arquitetura-e-pastas">Estrutura</a> •
    <a href="#-passo-a-passo-de-instalação-e-execução">Instalação</a> •
    <a href="#-variáveis-de-ambiente">Configuração</a> •
    <a href="#-contribuidores">Contribuidores</a>
  </p>

  <img src="https://img.shields.io/github/stars/mantuanpietro/espeto-gepeto?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/mantuanpietro/espeto-gepeto?style=social" alt="Forks" />
  <img src="https://img.shields.io/github/license/mantuanpietro/espeto-gepeto?style=flat-square&color=orange" alt="License" />
</div>

---

## 📝 Sobre o Projeto

O **Espeto Gepeto** é uma plataforma robusta desenvolvida para otimizar e gerenciar o fluxo operacional de espetarias e churrascarias modernas. O sistema unifica desde a entrada de pedidos dos clientes até a esteira de produção na brasa e o controle minucioso do estoque de insumos. 

Assim como o mestre Gepeto lapidou a madeira para criar vida, este software lapida processos analógicos e manuais para entregar uma gestão inteligente e em tempo real.

---

## 🌐 Demonstração & Hospedagem

O projeto já está publicado e pronto para uso em ambiente de produção! Você pode acessar a aplicação online e testar a interface através do link abaixo:

🔗 **Link do Projeto:** [Acessar Espeto Gepeto na Vercel](https://espeto-gepeto.vercel.app/?authuser=0)

### 📸 Prévia da Interface
<div align="center">
  <img src="/public/previa.png" />
  <p><em>Interface operacional: Gestão ágil do status da grelha e monitoramento de pedidos em tempo real.</em></p>
</div>

---

## ✨ Funcionalidades Principais

<details>
<summary>📋 <b>Gestão de Pedidos & Fila da Brasa</b> (Clique para expandir)</summary>
<br>

* **Fila Dinâmica de Preparo:** Acompanhe os espetos separados por categorias e estágios (*Aguardando*, *Na Brasa*, *No Ponto*, *Entregue*).
* **Painel do Churrasqueiro:** Uma visualização limpa focada em quem está operando a brasa para evitar desperdícios ou atrasos.
* **Histórico de Compras:** Registro detalhado dos consumos por mesa ou comanda do cliente.
</details>

<details>
<summary>📊 <b>Controle de Estoque e Insumos</b> (Clique para expandir)</summary>
<br>

* **Alertas de Estoque Baixo:** Avisos visuais automáticos quando itens populares (ex: medalhão de frango, queijo coalho) atingem a quantidade crítica.
* **Entrada e Saída Automatizada:** Abatimento automático dos espetos assim que o pedido é confirmado e enviado para a produção.
</details>

<details>
<summary>🔐 <b>Segurança e Autenticação</b> (Clique para expandir)</summary>
<br>

* **Níveis de Acesso:** Separação entre a visão do Administrator (ajuste de preços, estoque) e a visão dos Garçons/Churrasqueiros.
* **Persistência de Sessão:** Autenticação segura integrada para garantir a integridade dos dados operacionais.
</details>

---

## 🛠 Tecnologias Utilizadas

| Camada | Tecnologia | Badge |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Estilização** | Tailwind CSS | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Hospedagem** | Vercel | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |
| **Gerenciador** | NPM / Yarn | ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white) |

---

## 📐 Arquitetura e Pastas

A estrutura do projeto segue as melhores práticas de organização de componentes e modularidade:

```bash
espeto-gepeto/
├── 📁 public/            # Ativos estáticos (imagens, ícones, logos)
├── 📁 src/               # Código-fonte principal do app
│   ├── 📁 components/    # Componentes reutilizáveis (Botões, Cards, Modais)
│   ├── 📁 hooks/         # Custom hooks para gerenciamento de estado e APIs
│   ├── 📁 pages/         # Roteamento e telas principais da aplicação
│   ├── 📁 styles/        # Configurações globais de CSS e temas do Tailwind
│   └── 📁 utils/         # Funções auxiliares e formatadores (moeda, datas)
├── 📄 .env.example       # Modelo de configuração das variáveis locais
├── 📄 package.json       # Definição de scripts e dependências do Node.js
└── 📄 tailwind.config.js # Customizações do design system do projeto

🚀 Passo a Passo de Instalação e Execução
Siga rigorosamente as instruções abaixo para clonar, configurar e rodar o projeto localmente em sua máquina de desenvolvimento.

📋 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado em sua máquina:

Git (para clonar o repositório).

Node.js (versão 18.x ou superior recomendada).

Um gerenciador de pacotes (NPM ou Yarn).

🔧 1. Clonando o Repositório
Abra o seu terminal e execute o comando abaixo para trazer o projeto para a sua máquina:

Bash
git clone [https://github.com/mantuanpietro/espeto-gepeto.git](https://github.com/mantuanpietro/espeto-gepeto.git)
📂 2. Acessando a Pasta
Entre no diretório do projeto recém-clonado:

Bash
cd espeto-gepeto
📦 3. Instalando as Dependências
Instale todos os pacotes e bibliotecas necessárias listadas no package.json:

Bash
# Se utilizar NPM:
npm install

# Se preferir utilizar Yarn:
yarn install
⚙️ 4. Configurando Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com base no modelo existente:

Bash
cp .env.example .env
Abra o arquivo .env gerado e preencha com as credenciais ou chaves necessárias para o banco de dados/autenticação local (caso aplicável).

🔥 5. Executando a Aplicação
Agora, inicialize o servidor de desenvolvimento local:

Bash
# Se utilizar NPM:
npm run dev

# Se utilizar Yarn:
yarn dev
Assim que o terminal indicar que a compilação foi concluída com sucesso, abra o seu navegador e acesse:
👉 http://localhost:3000

⚙️ Variáveis de Ambiente
O arquivo .env configurado no passo anterior aceita os seguintes parâmetros de customização:

Fragmento do código
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_AUTH_DOMAIN=seu-dominio-autenticacao
# Adicione outras chaves essenciais do projeto aqui...
👥 Contribuidores
Quem tirou o projeto do papel e deu vida ao código:

📄 Licença
Este projeto está documentado sob a licença MIT. Sinta-se livre para clonar, modificar e distribuir, desde que mantenha os créditos originais.
