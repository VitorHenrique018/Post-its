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
  flex-direction: column;
  width: 22%;
  height: 10vh;
  background-color: #e9ecef;
  padding: 2rem;
  border-radius: 5px;
  margin-right: 1rem;
  margin-bottom: 2rem;

  button {
    float: right;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;
export const ContainerSpan = styled.span`
  color: #1c9997;
  font-weight: 600;
`;

export const ContainerP = styled.span`
  color: grey;
`;
