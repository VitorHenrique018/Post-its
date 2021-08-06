import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerBody = styled.div`
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-right: 2px solid orange;
  font-family: sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

export const ContainerTitle = styled.span`
  font-size: 1.75rem;
  font-weight: 600;
  color: purple;
`;

export const ContainerInput = styled.input`
  width: 80%;
  height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #e9ecef;
  color: grey;
  padding-left: 1rem;
  border: none;
  border-radius: 5px;
  font-family: sans-serif;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const ContainerTextArea = styled.textarea`
  width: 80%;
  height: 5rem;
  background-color: #e9ecef;
  color: grey;
  padding-left: 1rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  font-family: sans-serif;
  resize: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const ContainerButton = styled.button`
  width: 7rem;
  background-color: orange;
  height: 3.5vh;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: 15%;

  @media (max-width: 1280px) {
    margin-right: 10%;
  }

  @media (max-width: 468px) {
    margin-right: 8%;
  }
`;
