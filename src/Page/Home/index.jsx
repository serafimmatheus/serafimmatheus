import { Link } from "react-router-dom";
import { SectionHome, SectionMain, FooterHome } from "./style";
import { Container } from "../../Styles/Container";
import { BiArrowBack } from "react-icons/bi";
import { Midias } from "../../Components/MidiasSociais";
import perfil from "../../Assets/perfil.jpeg";
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { Buttons } from "../../Components/Buttons";

export const Home = () => {
  const {
    addBorderContact,
    addBorderMidias,
    boderContact,
    boderMidias,
    checkPage,
  } = useContext(HomeContext);

  return (
    <>
      <SectionHome>
        <header>
          <Container>
            <div className="box-header">
              <div>
                <h1>Matheus Serafim</h1>
                <p>Desenvolvedor Front-End</p>
              </div>

              <nav>
                <ul>
                  <li onClick={(e) => checkPage(e.target.innerText)}>
                    <Link className="li" to="/">
                      Home
                    </Link>
                  </li>

                  <li onClick={(e) => checkPage(e.target.innerText)}>
                    <Link className="li" to="/projetos">
                      Projetos
                    </Link>
                  </li>

                  <li onClick={addBorderContact} className="li">
                    Sobre
                  </li>

                  <Buttons onClick={addBorderMidias}>Contato</Buttons>
                </ul>
              </nav>
            </div>
          </Container>
        </header>

        <SectionMain boderContact={boderContact} boderMidias={boderMidias}>
          <Container className="container">
            <div className="box-main-person">
              <figcaption>
                <img src={perfil} alt="Foto perfil" />
              </figcaption>

              <Midias />

              <div className="teste">
                <p>
                  <BiArrowBack />
                  Midias Sociais
                </p>
              </div>
            </div>

            <div className="box-main-sobre">
              <h1>Sobre mim.</h1>
              <p>
                Eu nasci no dia 1 de julho de 1996 em Pinhais/Curitiba-PR, na
                america do Sul "Brasil".
              </p>

              <nav>
                <ul>
                  <li>
                    Em 2015 terminei meu colegial e comecei a jornada de
                    calouro.
                  </li>

                  <li>
                    Em 2016 entrei na faculdade de Engenharia Civil onde cursei
                    por 1 ano e 6 meses.
                  </li>

                  <li>
                    Em 2018 abri uma empresa onde fiquei por 2 anos e vendi para
                    meu sócio.
                  </li>

                  <li>
                    Em 2020 comecei a estudar programação e entrei na faculdade
                    de Gestão da Tecnologia da Informação.
                  </li>

                  <li>
                    Em julho de 2021 entrei na Kenzie Academy Brasil, atualmente
                    estudando o curso de Full-Stack.
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </SectionMain>

        <FooterHome>
          <Container>
            <div>
              <h3>Todos os direitos reservados.</h3>
            </div>
          </Container>
        </FooterHome>
      </SectionHome>
    </>
  );
};
