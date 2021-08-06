import { InsertPosts } from "./Components/InsertPosts";
import { RenderPosts } from "./Components/RenderPosts";
import { Container } from "./styles";

import React, { useState } from "react";
import { getPosts, createPost } from "./Actions/ApiPosts";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function getA() {
    try {
      const resp = await getPosts();
      console.log(resp);
      setData(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  async function postA() {
    const obj = {
      title: title,
      description: description,
    };
    if(!title.trim().length || !description.trim().length){
      alert("Assunto e/ou mensagem não informados");
    }
    else{
    try {
      await createPost(obj);
      alert("Post Adicionado com sucesso.");
    } catch (err) {
      console.log("erro");
    }

    setTitle("");
    setDescription("");
    getA();
  }
  }

  return (
    <Container>
      <InsertPosts
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        postA={postA}
      />
      <RenderPosts data={data} getA={getA} />
    </Container>
  );
}

export default App;
