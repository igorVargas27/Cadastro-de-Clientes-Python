export function criarItemCliente(cliente,removerCallback){
    const item = document.createElement("li");
    item.setAttribute("id",cliente.nome);
    item.innerHTML = `${cliente.nome} - ${cliente.email}
        <button class="btn-remover">X</button>`;
    
    const btn = item.querySelector(".btn-remover");
    btn.addEventListener("click",() => removerCallback(cliente.nome));

    return item;
}

export function renderizarLista(lista, container, callback){
    container.innerHTML = "";
    lista.map(callback).forEach(el => container.appendChild(el));
}