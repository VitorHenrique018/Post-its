import React from "react";
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerTitle,
  PostData,
  ContainerSpan,
  ContainerP,
} from "./styles";

export const RenderPosts = () => {
  const data = [
    {
      id: 1,
      title: "Ideaflix",
      description: "Empresa de pesquisa e inteligencia",
    },
    {
      id: 2,
      title: "Ideaflix",
      description: "Empresa de pesquisa e inteligencia ",
    },
    {
      id: 3,
      title: "Ideaflix",
      description: "Empresa de pesquisa e inteligencia Empresa de pesquisa e inteligencia Empresa de pesquisa e inteligencia Empresa de pesquisa e inteligencia Empresa de pesquisa e inteligencia Empresa de pesquisa e inteligencia  ",
    },
    {
      id: 4,
      title: "Ideaflix",
      description: "Empresa de pesquisa e inteligencia",
    },
  ];
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>Suas Notas</ContainerTitle>
      </ContainerHeader>
      <ContainerBody>
        {data.map((index) => (
          <PostData>
            <button>XX</button>
            <ContainerSpan>{index.title}</ContainerSpan>
            <hr></hr>
            <ContainerP>{index.description}</ContainerP>
          </PostData>
        ))}
      </ContainerBody>
    </Container>
  );
};
