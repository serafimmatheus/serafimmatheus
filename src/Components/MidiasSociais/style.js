import styled from "styled-components";

export const MidiasSociais = styled.nav`
  @media screen and (min-width: 320px) {
    ul {
      width: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      left: 40%;
      top: 5px;
      list-style: none;
      border: 5px solid ${({ boderMidias }) => (boderMidias ? "white" : "none")};

      li {
        margin: 10px 0;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
`;
