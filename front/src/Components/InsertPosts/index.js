import React from "react";

import {
  Container,
  ContainerBody,
  ContainerTitle,
  ContainerInput,
  ContainerTextArea,
  ContainerButton,
} from "./styles";

export const InsertPosts = ({title, setTitle, description, setDescription, postA}) => {

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
        <ContainerButton onClick={postA}>CRIAR NOTA</ContainerButton>
      </ContainerBody>
    </Container>
  );
};
