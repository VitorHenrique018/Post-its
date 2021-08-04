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
    border-right: none
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
  color: #c5c5c5;
  padding-left: 1rem;
  border: none;
  border-radius: 3px;
  font-family: sans-serif;

`;

export const ContainerTextArea = styled.textarea`
  width: 80%;
  height: 5rem;
  background-color: #e9ecef;
  color: #c5c5c5;
  padding-left: 1rem;
  border: none;
  border-radius: 3px;
  margin-bottom: 0.25rem;
  font-family: sans-serif;

`;

export const ContainerButton = styled.button`
  background-color: orange;
  width: 50%;
  height: 3.5vh;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
