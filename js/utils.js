export function apiFetch(url, options = {}){
    const usuario = "admin"
    const senha = "admin"

    const headers = {
        "Authorization": "Basic " + btoa(`${usuario}:${senha}`),
        "Content-Type": "application/json",
        ...(options.headers || {})
    }

    return fetch(url, {
    ...options,
    headers
    }).then(res => {
        if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
    });
}




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

