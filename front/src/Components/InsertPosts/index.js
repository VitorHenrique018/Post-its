import React, { useState } from "react";
import { createPost } from "../../Actions/ApiPosts";

import {
  Container,
  ContainerBody,
  ContainerTitle,
  ContainerInput,
  ContainerTextArea,
  ContainerButton,
} from "./styles";

export const InsertPosts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function postA() {
    const obj = {
      title: title,
      description: description,
    };
    try {
      await createPost(obj);
      alert("Post Adicionado com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setTitle("");
    setDescription("");
  }

  const criarArtigo = () => {
    postA();
  };
  return (
    <Container>
      <ContainerBody>
        <ContainerTitle>Bloco de notas</ContainerTitle>
        <ContainerInput
          placeholder="Assunto"
          className="input-msg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContainerTextArea
          placeholder="Texto"
          className="input-msg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ContainerButton onClick={criarArtigo}>Criar Nota</ContainerButton>
      </ContainerBody>
    </Container>
  );
};
