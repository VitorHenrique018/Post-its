import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../Actions/ApiPosts";

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

export const RenderPosts = () => {
  const [postA, setPostA] = useState([]);

  useEffect(() => {
    getA();
  }, []);

  async function getA() {
    try {
      const resp = await getPosts();
      console.log(resp);
      setPostA(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  async function deleteA(id) {
    try {
      await deletePost(id);
      alert("Artigo excluído com sucesso.");
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
        {postA?.map((index) => (
          <PostData>
            <PostDataHeader>
              <button onClick={() => deleteA(index.id)}>XX</button>
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
