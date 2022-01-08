//extrutura express
//nomeVariavel.get("/", (req, res)=>res.send("mensagem qualquer!"));

//estrutura require 
//const nomeVariavel = require("./nomeArquivo.json")
//app.use(express.json());
//app.get("/nome", (req, res)=>res.send(nomeVariavel));

//No terminal:
//npm init -y //inicia um projeto
//npm install express --save //instala um pacote e salva, no caso, express. 
//npm install - Se alguem quiser clonar o projeto

const express = require("express");
//esta variavel esta requisitando o modulo express que foi instalado: npm instal express

//criando rota
const app = express();
//foi criada uma variavel para o nome express, no caso, "app"
app.get("/", (req, res)=>res.send("Ola mundo!"));
app.get("/contatos", (req, res)=>res.send(["Contato1", "Contato2", "Contato3"]));
app.get('/aula', (req, res)=>res.send("09-12-2021"));

//requerendo um arquivo
const filmes = require("./package.json")
//esta variavel esta requisitando um arquivo
app.use(express.json());
app.get('/cinema',(req,res)=>res.send(filmes)); 



//criando servidor
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000."));
//Para ver o resultado: digite no navegador: localhost:300
//Para parar, digite no terminal: ctrl + c
