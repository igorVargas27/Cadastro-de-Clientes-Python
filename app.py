from fastapi import FastAPI, HTTPException

app = FastAPI()

clientes = []

@app.get("/clientes")
def get_clientes():
    return clientes
    
@app.post("/clientes")
def post_clientes(nome: str, email: str):
    for cliente in clientes:
        if cliente["nome"] == nome:
            raise HTTPException(status_code=400, detail="cliente já cadastrado.")
    else:
        clientes.append({"nome": nome, "email": email})
        return {"message": "cliente cadastrado com sucesso!"}
    
@app.delete("/clientes/{nome}")
def delete_clientes(nome: str):
    for cliente in clientes:
        if cliente["nome"] == nome:
            clientes.remove(cliente)
            return {"message": "cliente excluído com sucesso!"}
    else:
        raise HTTPException(status_code=404, detail="cliente não encontrado.")