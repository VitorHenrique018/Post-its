import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2rem;

  
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
