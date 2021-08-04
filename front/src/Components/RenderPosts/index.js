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
      description: "Empresa de pesquisa e inteligencia",
    },
    {
      id: 3,
      title: "Ideaflix",
      description: "Empresa de pesquisa e inteligencia",
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
        <PostData>
          <button>XX</button>
          <ContainerSpan>Ideaflix</ContainerSpan>
          <hr></hr>
          <ContainerP>empresa de pesquisa e inteligencia</ContainerP>
        </PostData>
        <PostData>
          <button>XX</button>
          <ContainerSpan>Ideaflix</ContainerSpan>
          <hr></hr>
          <ContainerP>empresa de pesquisa e inteligencia</ContainerP>
        </PostData>
        <PostData>
          <button>XX</button>
          <ContainerSpan>Ideaflix</ContainerSpan>
          <hr></hr>
          <ContainerP>empresa de pesquisa e inteligencia</ContainerP>
        </PostData>{" "}
        <PostData>
          <button>XX</button>
          <ContainerSpan>Ideaflix</ContainerSpan>
          <hr></hr>
          <ContainerP>empresa de pesquisa e inteligencia</ContainerP>
        </PostData>
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
