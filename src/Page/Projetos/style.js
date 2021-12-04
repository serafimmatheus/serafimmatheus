import styled from "styled-components";
import bgHome from "../../Assets/bgHome.jpg";

export const SectionProjetos = styled.section`
  ::before {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    content: "";
  }
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;
    background-image: url("${bgHome}");
    background-size: 100%;
    background-position: center;
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

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export const MainProjetos = styled.section`
  @media screen and (min-width: 320px) {
    .box-main-projects {
      position: relative;
      z-index: 4;

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      padding: 30px 0;

      .box-main_single-projects {
        width: 300px;
        height: 300px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;
        border: 5px solid white;

        figure {
          position: relative;
          img {
            position: relative;
            width: 100%;
          }
        }

        .buttons {
          display: flex;
          justify-content: center;

          a:nth-of-type(1) {
            width: 50%;
            height: 40px;
            background-color: white;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            justify-content: center;

            color: black;
          }
          a:nth-of-type(2) {
            width: 50%;
            height: 40px;
            background-color: white;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: black;
          }
        }
      }
    }
  }
`;

export const FooterProjetos = styled.footer`
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
