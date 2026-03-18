//Modularização (ES Modules)
import { Usuario } from "./classes.js";
import { criarItemCliente,renderizarLista } from "./utils.js";

const API_URL = "http://127.0.0.1:8000/clientes";
const lista = document.getElementById("listaClientes");
const btnAdd = document.getElementById("add");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

async function carregarClientes() {
    lista.innerHTML = "";

    try{
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        renderizarLista(dados, lista, cliente =>
            criarItemCliente(new Usuario(cliente.nome, cliente.email), removerCliente)
        );
    }catch (erro){
        console.error("Erro ao carregar clientes:", erro);
    }
}

async function adicionarCliente() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();

    if(!nome || !email){
        alert("Preencha todos os campos!");
        return;
    }

    const novoUsuario = new Usuario(nome, email);

    try{
        await fetch(`${API_URL}?nome=${novoUsuario.nome}&email=${novoUsuario.email}`,{
            method: "POST"
        });

        inputNome.value = "";
        inputEmail.value = "";

        carregarClientes();
    }catch(erro){
        console.error("Erro ao adicionar cliente:",erro);
    }
}

async function  removerCliente(nome){
    try{
        await fetch(`${API_URL}/${encodeURIComponent(nome)}`,{
            method: "DELETE"
        });

        carregarClientes();
    }catch (erro){
        console.error("Erro ao remover cliente:",erro);
    }
}

btnAdd.addEventListener("click",adicionarCliente);

carregarClientes();

