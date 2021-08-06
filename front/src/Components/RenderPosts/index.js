import React, { useEffect } from "react";
import { deletePost } from "../../Actions/ApiPosts";

import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerTitle,
  PostData,
  PostDataHeader,
  PostDataBody,
  ContainerSpan,
  ContainerP,
} from "./styles";

export const RenderPosts = ({getA, data}) => {

  useEffect(() => {
    getA();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  async function deleteA(id) {
    try {
      await deletePost(id);
      alert("Post excluído com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    getA();
  }

  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>Suas Notas</ContainerTitle>
      </ContainerHeader>
      <ContainerBody>
        {data?.map((index) => (
          <PostData>
            <PostDataHeader>
              <button onClick={() => deleteA(index.id)}>X</button>
            </PostDataHeader>
            <PostDataBody>
              <ContainerSpan>{index.title}</ContainerSpan>
              <hr></hr>
              <ContainerP>{index.description}</ContainerP>
            </PostDataBody>
          </PostData>
        ))}
      </ContainerBody>
    </Container>
  );
};
