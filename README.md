# Sistema de Gerenciamento de Usuários - CRUD Full Stack

## 📝 Sobre o Projeto

Este é um sistema completo de gerenciamento de usuários desenvolvido com Express.js e React, implementando operações CRUD (Create, Read, Update, Delete). O projeto é dividido em duas partes principais: um backend RESTful API construído com Express.js e um frontend interativo desenvolvido com React e TypeScript.

## 🚀 Tecnologias Utilizadas

### Backend

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL

### Frontend

- React
- TypeScript
- Vite
- Axios

## 🛠️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- npm ou yarn

### Configuração do Backend

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

- Configure as credenciais do banco de dados em /config

4. Execute as migrações do banco de dados:

```bash
npm run migrate
```

5. Inicie o servidor:

```bash
npm run dev
```

### Configuração do Frontend

1. Navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 📋 Funcionalidades

### Backend (API)

#### Endpoints

- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Obtém um usuário específico
- `POST /users` - Cria um novo usuário
- `PUT /users/:id` - Atualiza um usuário existente
- `DELETE /users/:id` - Remove um usuário

### Frontend

- Lista de usuários com tabela interativa
- Formulário de criação de usuário
- Edição de usuários existentes
- Exclusão de usuários com confirmação
- Validação de formulários
- Feedback visual de operações
- Interface responsiva e intuitiva

## 🎯 Estrutura do Projeto

```
├── backend/
│   ├── config/
│   ├── migrations/
│   ├── models/
│   ├── src/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   └── App.tsx
│   └── package.json
```

## 💻 Como Usar

1. Acesse a aplicação através do navegador (`http://localhost:5173`)
2. Na página inicial, você verá a lista de usuários cadastrados
3. Use o botão "Adicionar Novo Usuário" para criar um novo registro
4. Para editar ou excluir, use os botões na coluna "Ações" da tabela

## 🔒 Validações e Segurança

- Validação de campos obrigatórios
- Validação de formato de e-mail
- Confirmação antes de excluir usuários
- Tratamento de erros com feedback visual
