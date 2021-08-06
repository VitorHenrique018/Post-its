const express = require("express");

const { v4: uuid } = require("uuid");

const cors = require("cors");

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  //console.log("Acessou o middleware");
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
  /*pode colocar Localhost:3334 | * libera para todos., serve para os metodos tbm, put,get, post*/
  server.use(cors());
  next();//USADO PARA LIBERAR A APLICAÇÃO
});

const posts = [
  { id: "1", title: "Ideafix", description: "Empresa de pesquisa e inteligência" },
  { id: "2", title: "Ideafix", description: "Plataform de pesquisa que gera valor" },
  { id: "3", title: "Vaga desenvolvedor", description: "Profissional full stack para colaborar" },
];

server.get("/search", (req, res) => {
  return res.json(posts);
});

server.post("/newposts", (req, res) => {
  const { title, description } = req.body;

  const newPost = {
    id: uuid(),
    title,
    description,
  };

  posts.push(newPost);

  return res.json(newPost);
});

server.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  const postIndex = posts.findIndex((index) => index.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post não encontrado", data: posts });
  }

  posts.splice(postIndex, 1);

  return res.json({ message: "O post foi excluído." });
});

server.listen(3333);
