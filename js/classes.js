export class Usuario{
    //Encapsulamento com campos privados
    #nome;
    #email;
    
    constructor(nome,email){
        this.#nome = nome;
        this.#email = email;
    }
    //Uso de getters
    get nome(){
        return this.#nome;
    }
    get email(){
        return this.#email;
    }
    toHTML(){
        return `<li><strong>${this.nome}</strong>: ${this.email}</li>`;
    }
}