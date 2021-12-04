import styled from "styled-components";

import bgHome from "../../Assets/bgHome.jpg";

export const SectionHome = styled.section`
  @media screen and (min-width: 320px) {
    ::before {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      content: "";
    }
    width: 100%;
    height: 100vh;
    background-image: url("${bgHome}");
    background-size: 100%, 100%;
    background-position: cover;
    background-repeat: no-repeat;

    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 40px 0;
      position: relative;
      z-index: 1;

      border-bottom: 2px solid #ccc;

      div {
        h1 {
          color: white;
          font-size: 35px;
        }

        p {
          color: white;
          font-size: 18px;
        }
      }

      nav {
        ul {
          display: flex;
          list-style: none;

          li {
            margin: 0 40px;
          }

          .li {
            text-decoration: none;
            font-size: 18px;
            color: white;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export const SectionMain = styled.main`
  @media screen and (min-width: 320px) {
    .container {
      display: flex;
    }
    .box-main-person {
      width: 50%;
      position: relative;
      z-index: 1;

      figcaption {
        width: 250px;
        margin-left: 150px;
        position: relative;
        z-index: 2;
        margin-top: 20px;

        img {
          width: 100%;
          border: 5px solid #05203d;
          border-radius: 200px;
        }
      }

      .teste {
        position: fixed;
        top: 0;
        left: 31.5%;
        width: 300px;
        height: 80vh;
        background-color: #05203d;
        opacity: 0.9;

        z-index: 1;
        border-bottom: 5px solid white;

        p {
          position: relative;
          top: 70vh;
          left: 5%;

          display: flex;
          align-items: center;

          color: white;
        }
      }
    }

    .box-main-sobre {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      position: relative;
      z-index: 1;

      h1 {
        position: relative;
        left: -100px;
        font-size: 50px;
      }

      p {
        font-size: 30px;
      }

      nav {
        ul {
          display: flex;
          flex-direction: column-reverse;
          border: 5px solid
            ${({ boderContact }) => (boderContact ? "white" : "transparent")};

          li {
            margin-top: 20px;
            margin-left: 50px;

            font-size: 18px;
          }
        }
      }
    }
  }
`;

export const FooterHome = styled.footer`
  @media screen and (min-width: 320px) {
    position: fixed;
    bottom: 0;

    width: 100%;

    text-align: center;

    padding: 20px 0;

    background-color: rgba(0, 0, 0, 0.4);

    div {
      position: relative;
      z-index: 3;
    }
  }
`;
