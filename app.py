from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI(
    title= "API de Cadstro de Clientes",
    description= "API para gerenciar cadastro de clientes.",
    version= "1.0.0",  
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)

clientes = {}

class Cliente(BaseModel):
    nome_cliente: str
    email_cliente: EmailStr

@app.get("/clientes")
def get_clientes():
    return list(clientes.values())
    
@app.post("/clientes", status_code=201)
def post_clientes(cliente: Cliente):
    email = cliente.email_cliente.lower()
    if email in clientes:
        raise HTTPException(status_code=400, detail="cliente já cadastrado.")

    clientes[email] = cliente
    return cliente
    
@app.delete("/clientes/{email_cliente}")
def delete_clientes(email_cliente: EmailStr):
    email = email_cliente.lower()
    if email not in clientes:
        raise HTTPException(status_code=404, detail="Cliente não encontrado.")
    
    del clientes[email]
    return {"message": "cliente deletado com sucesso!"}