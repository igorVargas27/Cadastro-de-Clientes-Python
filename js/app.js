//Modularização (ES Modules)
import { Usuario } from "./classes.js";
import { criarItemCliente,renderizarLista, apiFetch } from "./utils.js";

const API_URL = "http://127.0.0.1:8000/clientes";
const lista = document.getElementById("listaClientes");
const btnAdd = document.getElementById("add");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

async function carregarClientes() {
    lista.innerHTML = "";

    try{
        const dados = await apiFetch(API_URL);

        renderizarLista(dados.clientes, lista, cliente =>
            criarItemCliente(new Usuario(cliente.nome_cliente, cliente.email_cliente), removerCliente)
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
        await apiFetch(API_URL,{
            method: "POST",
            body: JSON.stringify({
                nome_cliente: novoUsuario.nome,
                email_cliente: novoUsuario.email
            })
        });

        inputNome.value = "";
        inputEmail.value = "";

        carregarClientes();
    }catch(erro){
        console.error("Erro ao adicionar cliente:",erro);
    }
}

async function  removerCliente(email){
    try{
        await apiFetch(`${API_URL}/${encodeURIComponent(email)}`,{
            method: "DELETE"
        });

        carregarClientes();
    }catch (erro){
        console.error("Erro ao remover cliente:",erro);
    }
}

btnAdd.addEventListener("click",adicionarCliente);

carregarClientes();

