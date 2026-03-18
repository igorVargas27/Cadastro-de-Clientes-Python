📋 Cadastro de Clientes — CRUD com FastAPI + Fetch API

Aplicação web completa (frontend + backend) para cadastro de clientes, desenvolvida com foco em Programação Orientada a Objetos, modularização em JavaScript e criação de API REST com FastAPI.

🚀 Funcionalidades

✅ Cadastrar cliente (nome e e-mail)

📄 Listar clientes automaticamente

❌ Excluir cliente

🔄 Atualização dinâmica da interface (sem recarregar a página)

🧱 Estrutura do Projeto
/index.html       → Interface principal
/style.css        → Estilo da página
/js/
 ├── classes.js   → Classe Usuario (POO com encapsulamento)
 ├── utils.js     → Funções auxiliares (renderização e criação de elementos)
 └── app.js       → Integração com API (Fetch + eventos)

/app.py           → API REST com FastAPI
⚙️ Tecnologias Utilizadas

HTML5 → Estrutura da aplicação

CSS3 → Estilização

JavaScript (ES Modules) → Organização modular do frontend

Fetch API → Comunicação com o backend

FastAPI → Criação da API REST (backend em Python)

🔗 Integração Frontend + Backend

O frontend consome a API através de requisições HTTP:

GET /clientes → lista clientes

POST /clientes → cadastra cliente

DELETE /clientes/{nome} → remove cliente

Os dados são manipulados dinamicamente no navegador usando Fetch API + async/await.

📋 Como Executar o Projeto
🔹 1. Instalar dependências do backend
pip install fastapi uvicorn
🔹 2. Rodar a API
uvicorn app:app --reload

A API estará disponível em:

http://127.0.0.1:8000
🔹 3. Abrir o frontend

Abra o arquivo index.html no navegador
ou

Utilize uma extensão como Live Server (recomendado)

⚠️ Observações

Os dados são armazenados em memória (não persistem ao reiniciar a API)

O identificador do cliente é o nome (pode gerar conflitos em casos reais)

Para projetos maiores, o ideal é utilizar:

banco de dados (SQLite, PostgreSQL)

IDs únicos

🧠 Conceitos Aplicados
🔹 Programação Orientada a Objetos (POO)

Classe Usuario com encapsulamento (campos privados #)

Separação de responsabilidades

🔹 Programação Funcional

Uso de funções puras para renderização

Manipulação de listas com map

🔹 Modularização (ES Modules)

Código dividido em módulos reutilizáveis (import/export)

🔹 API REST

Criação de endpoints com FastAPI

Comunicação via HTTP (GET, POST, DELETE)

🧪 Boas Práticas Implementadas

✅ Uso de async/await

✅ Separação entre frontend e backend

✅ Manipulação moderna do DOM

✅ Organização modular

✅ Tratamento básico de erros

🚀 Possíveis Melhorias

🔹 Adicionar banco de dados (SQLite)

🔹 Implementar método PUT (atualização)

🔹 Criar IDs únicos para clientes

🔹 Melhorar tratamento de erros no frontend

🔹 Deploy da aplicação

🧑‍💻 Autor

Projeto desenvolvido como prática de:

desenvolvimento fullstack

integração frontend + backend

uso de APIs REST com FastAPI