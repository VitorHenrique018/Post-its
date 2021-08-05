import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

export const ContainerHeader = styled.div``;

export const ContainerTitle = styled.span`
  font-size: 1.75rem;
  font-weight: 600;
  color: purple;
`;

export const ContainerBody = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 15vh;
  background-color: #e9ecef;
  border-radius: 5px;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-family: sans-serif;
  position: relative;
  hr {
    border:  0.1px dashed  #c5c5c5;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 468px) {
    height: 14vh;
  }
`;


export const PostDataHeader = styled.div`
  height: 5%;

  button{
    position: absolute;
    top: -10px;
    right: -10px;
  }
  
`;

export const PostDataBody = styled.div`
  flex-direction: column;
  padding: 2rem;
  hr {
    border:  0.1px dashed  #c5c5c5;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ContainerSpan = styled.span`
  color: #1c9997;
  font-weight: 600;
`;

export const ContainerP = styled.span`
  color: grey;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  overflow: hidden;
`;
