const express = require("express");

const { v4: uuid } = require("uuid");

const cors = require("cors");

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  //console.log("Acessou o middleware");
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  /*pode colocar Localhost:3334 | * libera para todos., serve para os metodos tbm, put,get, post*/
  server.use(cors());
  next();//USADO PARA LIBERAR A APLICAÇÃO
});

const posts = [
  { id: "123", title: "post 01", description: "conteudo" },
  { id: "234", title: "post 02", description: "conteudo" },
  { id: "345", title: "post 03", description: "conteudo" },
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
