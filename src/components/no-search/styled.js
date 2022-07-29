import styled from "styled-components";

export const Wrapper = styled.div `
    margin: 16px;

    h1{
        padding-top: 20px;
        font-weight: bold;
        font-size: 32px;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 482px) {
      h1{
        font-size: 24px;
      }
    }
`;