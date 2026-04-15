export function criarItemCliente(cliente,removerCallback){
    const item = document.createElement("li");
    item.setAttribute("id",cliente.email);

    item.innerHTML = `${cliente.nome} - ${cliente.email}
        <button class="btn-remover">X</button>`;
    
    const btn = item.querySelector(".btn-remover");

    btn.addEventListener("click",() => removerCallback(cliente.email));

    return item;
}

export function renderizarLista(lista, container, callback){
    container.innerHTML = "";

    lista.forEach(item => {
        const elemento = callback(item);
        container.appendChild(elemento);
    });
}