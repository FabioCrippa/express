//extrutura express
//nomeVariavel.get("/", (req, res)=>res.send("mensagem qualquer!"));

//No terminal:
//npm init -y //inicia um projeto
//npm install express --save //instala um pacote e salva, no caso, express. 
//npm install - Se alguem quiser clonar o projeto

const express = require("express");
//esta variavel esta requisitando o modulo express que foi instalado: npm instal express
const app = express();
//foi criada uma variavel para o nome express, no caso, "app"
//executa a funcao do express
//const filmes = require();

//criando rota
app.get("/", (req, res)=>res.send("Ola mundo!"));
app.get("/contatos", (req, res)=>res.send(["Contato1", "Contato2", "Contato3"]));

//criando servidor
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000."));
//Para ver o resultado: digite no navegador: localhost:300
//Para parar, digite no terminal: ctrl + c
