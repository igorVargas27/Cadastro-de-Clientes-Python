📋 Cadastro de Clientes — CRUD com FastAPI + Fetch API

Aplicação web completa (frontend + backend) para cadastro de clientes, desenvolvida com foco em Programação Orientada a Objetos, modularização em JavaScript e criação de API REST com FastAPI.

🚀 Funcionalidades

🔹 Cadastrar cliente (nome e e-mail)
🔹 Listar clientes automaticamente
🔹 Excluir cliente por e-mail
🔹 Atualização dinâmica da interface (sem recarregar a página)

🧱 Estrutura do Projeto
/index.html → Interface principal
/style.css → Estilo da página

/js/
 ├── classes.js → Classe Usuario (POO com encapsulamento)
 ├── utils.js → Funções auxiliares (renderização e criação de elementos)
 └── app.js → Integração com API (Fetch + eventos)

/app.py → API REST com FastAPI

⚙️ Tecnologias Utilizadas

🔹 HTML5 → Estrutura da aplicação
🔹 CSS3 → Estilização
🔹 JavaScript (ES Modules) → Organização modular do frontend
🔹 Fetch API → Comunicação com backend
🔹 FastAPI → API REST em Python

🔗 Integração Frontend + Backend

O frontend consome a API através de requisições HTTP:

🔹 GET /clientes → lista clientes
🔹 POST /clientes → cadastra cliente
🔹 DELETE /clientes/{email_cliente} → remove cliente

🚀 Como Executar o Projeto
🔹 1. Instalar dependências
pip install fastapi uvicorn
🔹 2. Rodar a API
uvicorn app:app --reload

A API estará disponível em:

http://127.0.0.1:8000
🔹 3. Abrir o frontend

🔹 Abrir index.html no navegador
ou
🔹 Usar extensão Live Server (recomendado)

⚠️ Observações

🔹 Os dados são armazenados em memória (não persistem ao reiniciar a API)
🔹 O identificador único agora é o e-mail
🔹 Evita duplicidade com validação no backend usando EmailStr

🧠 Conceitos Aplicados
🔹 Programação Orientada a Objetos (POO)

🔹 Classe Usuario com encapsulamento (#nome, #email)

🔹 Programação Funcional

🔹 Funções puras para renderização
🔹 Manipulação de listas no frontend

🔹 Modularização (ES Modules)

🔹 Código dividido em módulos reutilizáveis

🔹 API REST

🔹 Criação de endpoints com FastAPI
🔹 Comunicação via HTTP (GET, POST, DELETE)

🧪 Boas Práticas Implementadas

🔹 async/await no frontend
🔹 separação frontend/backend
🔹 manipulação moderna do DOM
🔹 validação com Pydantic (EmailStr)
🔹 padronização de dados (nome_cliente, email_cliente)

🚀 Possíveis Melhorias

🔹 Implementar banco de dados (SQLite / PostgreSQL)
🔹 Criar método PUT (atualização de cliente)
🔹 Usar IDs únicos (UUID)
🔹 Melhorar UI/UX
🔹 Deploy da aplicação

🧑‍💻 Autor

Projeto desenvolvido para prática de:

🔹 desenvolvimento fullstack
🔹 integração frontend + backend
🔹 APIs REST com FastAPI
