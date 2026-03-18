
# Cadastro de Clientes - CRUD com Fetch API e Módulos ES

Este projeto é uma aplicação web modularizada que permite **cadastrar**, **listar** e **excluir** clientes,
utilizando **Programação Orientada a Objetos (POO)**, **Programação Funcional** e **Fetch API**.

---

## 🚀 Funcionalidades
- **Cadastrar Cliente**: insira nome e e-mail e clique em **Salvar**.
- **Listar Clientes**: os clientes cadastrados são exibidos automaticamente na tela.
- **Excluir Cliente**: cada item possui um botão **X** que permite remover o cliente da lista e da API.

---

## 🧱 Estrutura do Projeto

```
/index.html       → Interface principal
/style.css        → Estilo da página
/js/
 ├── classes.js   → Define a classe Usuario (POO com campos privados)
 ├── utils.js     → Funções auxiliares puras (criação e renderização de elementos)
 └── app.js       → Controlador principal (Fetch API, eventos e integração)
```

---

## ⚙️ Tecnologias Utilizadas
- **HTML5** – Estrutura da aplicação.
- **CSS3** – Estilização básica e responsiva.
- **JavaScript (ES Modules)** – Organização do código em módulos.
- **Fetch API** – Consumo da API REST (CrudCrud).

---

## 📋 Como Usar

1. Acesse [CrudCrud](https://crudcrud.com/) e gere uma nova URL de API (expira em 24h).
2. No arquivo **js/app.js**, substitua a linha:
   ```js
   const API_URL = "https://crudcrud.com/api/SEU_ID/clientes";
   ```
   pelo seu **ID único da API**.
3. Abra o arquivo `index.html` no navegador.
4. Preencha **Nome** e **E-mail** e clique em **Salvar**.
5. Os clientes aparecerão na lista logo abaixo.

---

## 🧠 Conceitos Aplicados

### 🔹 Programação Orientada a Objetos (POO)
A classe `Usuario` utiliza **campos privados (#)** e **getters** para garantir encapsulamento e controle de acesso.

### 🔹 Programação Funcional
Funções como `renderizarLista()` e `map()` são usadas para criar e exibir os elementos da lista de forma funcional.

### 🔹 Modularização (ES Modules)
O projeto está dividido em módulos com `import` e `export`, garantindo uma **melhor organização** e **reutilização de código**.

---

## 🧪 Requisitos Atendidos
✅ Encapsulamento com campos privados  
✅ Modularização com ES Modules  
✅ Funções puras e uso de map()  
✅ Validação de entradas  
✅ Manipulação moderna do DOM (addEventListener)  
✅ Atualização dinâmica da interface sem recarregar a página  

---

## 🧑‍💻 Autor
Desenvolvido como prática de **POO e integração com APIs REST** utilizando **Fetch API** e **módulos ES6**.
