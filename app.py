from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import secrets
import os

app = FastAPI(
    title= "API de Cadstro de Clientes",
    description= "API para gerenciar cadastro de clientes.",
    version= "1.0.1",  
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)

usuario = "admin"
senha = "admin"

security = HTTPBasic()

clientes = {}

class Cliente(BaseModel):
    nome_cliente: str
    email_cliente: EmailStr

def autenticar_usuario(credentials: HTTPBasicCredentials = Depends(security)):
    is_username_correct = secrets.compare_digest(credentials.username, usuario)
    is_password_correct = secrets.compare_digest(credentials.password, senha)

    if not (is_username_correct and is_password_correct):
        raise HTTPException(status_code=401, detail="Usuário ou senha incorretos.", headers={"WWW-Authenticate": "Basic"})

@app.get("/clientes")
def get_clientes(page: int = 1, limit: int = 10, credentials: HTTPBasicCredentials = Depends(autenticar_usuario)):
    if page < 1 or limit < 1:
        raise HTTPException(status_code=400, detail="Page ou limit estão com valores inválidos!")
    
    if not clientes:
        return{
            "page": page,
            "limit": limit,
            "total": 0,
            "clientes": []
        }
    
    clientes_ordenados = sorted(clientes.values(), key=lambda c: c.nome_cliente)

    start= (page-1) * limit
    end= start + limit

    clientes_paginados = clientes_ordenados[start:end]
    return {
        "page": page,
        "limit": limit,
        "total": len(clientes),
        "clientes": clientes_paginados
    }
    
@app.post("/clientes", status_code=201)
def post_clientes(cliente: Cliente, credentials: HTTPBasicCredentials = Depends(autenticar_usuario)):
    email = cliente.email_cliente.lower()
    if email in clientes:
        raise HTTPException(status_code=400, detail="cliente já cadastrado.")

    clientes[email] = cliente
    return cliente
    
@app.delete("/clientes/{email_cliente}")
def delete_clientes(email_cliente: EmailStr, credentials: HTTPBasicCredentials = Depends(autenticar_usuario)):
    email = email_cliente.lower()
    if email not in clientes:
        raise HTTPException(status_code=404, detail="Cliente não encontrado.")
    
    del clientes[email]
    return {"message": "cliente deletado com sucesso!"}