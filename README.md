# DevOps DIO Project 🚀

## Sobre o projeto
Este projeto é uma aplicação Node.js com integração completa de DevOps, criado como hands-on na trilha da DIO.  
O objetivo é demonstrar habilidades práticas em **DevOps e Azure**, incluindo:

- Criação de repositórios GitHub e versionamento de código
- Pipeline CI/CD no **Azure DevOps**
- Provisionamento de recursos no **Azure** (Resource Group, Storage Account, Tags)
- Automatização de processos para integração e entrega contínua

---

## Tecnologias utilizadas

- **Node.js 18** – Backend da aplicação
- **Express.js** – Framework para API
- **Git & GitHub CLI** – Versionamento e automação de repositório
- **Azure DevOps** – Pipeline CI/CD
- **Microsoft Azure** – Infraestrutura como serviço (Resource Group, Storage, App Registration)
- **YAML** – Configuração de pipeline

---

## Estrutura do projeto

```text
devops-dio-project/
│
├─ src/
│  └─ index.js          # Arquivo principal da API
├─ package.json
├─ package-lock.json
└─ README.md
```

---

## Funcionalidades

- API Node.js rodando na porta 3000
- Endpoint de health check (`/health`) para validação automática
- Build automatizado via pipeline CI/CD
- Provisionamento de recursos no Azure para prática real de cloud

---

## Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/taissocout/devops-dio-project.git
cd devops-dio-project
```

2. Instale dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
npm start
```

4. Teste o health check:

```bash
curl http://localhost:3000/health
```

---

## Pipeline CI/CD

O pipeline no Azure DevOps realiza:

- Instalação do Node.js
- Instalação das dependências
- Execução da aplicação
- Validação de health check automático

YAML do pipeline:

```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Instalar Node.js'

- script: npm install
  displayName: 'Instalar dependências'

- script: |
    npm start &
    sleep 5
    curl http://localhost:3000/health
  displayName: 'Testar API'
```

---

## Azure Resources

- **Resource Group:** `devops-dio-rg`
- **Storage Account:** `devopsdiostorage01`
- **Tags:**  
  - projeto: devops-dio  
  - ambiente: dev  
  - owner: taisso
- **App Registration:** `devops-dio-app` (Client ID e Tenant ID configurados para CI/CD)

---

## Resultado

- Integração completa de DevOps com cloud
- Automação de pipeline CI/CD
- Provisão de infraestrutura no Azure
- Projeto pronto para apresentar em portfólio ou entrevista

---

## Contato

Taisso Coutinho  
📧 devsecops-taisso@outlook.com  
[LinkedIn](https://www.linkedin.com/in/taissocout/)
