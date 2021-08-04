import React from "react";
import {
  Container,
  ContainerBody,
  ContainerTitle,
  ContainerInput,
  ContainerTextArea,
  ContainerButton,
} from "./styles";

export function InsertPosts() {
  return (
    <Container>
      <ContainerBody>
        <ContainerTitle>Bloco de notas</ContainerTitle>
        <ContainerInput placeholder="Assunto"></ContainerInput>
        <ContainerTextArea placeholder="Texto"></ContainerTextArea>
        <ContainerButton>Criar Nota</ContainerButton>
      </ContainerBody>
    </Container>
  );
}
