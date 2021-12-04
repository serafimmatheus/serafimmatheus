import { Link } from "react-router-dom";
import { Container } from "../../Styles/Container";
import { SectionProjetos, MainProjetos, FooterProjetos } from "./style";
import hamburgueria from "../../Assets/hamburgueria.png";
import doit from "../../Assets/doit.png";
import kenziehub from "../../Assets/kenziehub.png";
import kenzieshop from "../../Assets/kenzieshop.png";
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";

export const Projetos = () => {
  const {
    addBorderContact,
    addBorderMidias,
    boderContact,
    boderMidias,
    checkPage,
  } = useContext(HomeContext);
  return (
    <SectionProjetos>
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

                <li onClick={(e) => checkPage(e.target.innerText)}>
                  <Link className="li" to="/">
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      <MainProjetos>
        <Container>
          <div className="box-main-projects">
            <div className="box-main_single-projects">
              <figure>
                <img src={kenziehub} alt="Imagem do Projeto" />
              </figure>

              <div className="buttons">
                <a
                  target="_blank"
                  href="https://kenziehub-kappa-ten.vercel.app/"
                >
                  Visite
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-serafimmatheus"
                >
                  GitHub do Projeto
                </a>
              </div>
            </div>

            <div className="box-main_single-projects">
              <figure>
                <img src={doit} alt="Imagem do Projeto" />
              </figure>

              <div className="buttons">
                <a target="_blank" href="https://do-it-tawny.vercel.app/">
                  Visite
                </a>
                <a
                  target="_blank"
                  href="https://github.com/serafimmatheus/doit"
                >
                  GitHub do Projeto
                </a>
              </div>
            </div>

            <div className="box-main_single-projects">
              <figure>
                <img src={hamburgueria} alt="Imagem do Projeto" />
              </figure>

              <div className="buttons">
                <a
                  target="_blank"
                  href="https://hamburgueriakenzie-one.vercel.app/"
                >
                  Visite
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-serafimmatheus"
                >
                  GitHub do Projeto
                </a>
              </div>
            </div>

            <div className="box-main_single-projects">
              <figure>
                <img src={kenzieshop} alt="Imagem do Projeto" />
              </figure>

              <div className="buttons">
                <a
                  target="_blank"
                  href="https://react-entrega-s3-kenzieshop-serafimmatheus.vercel.app/"
                >
                  Visite
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-serafimmatheus"
                >
                  GitHub do Projeto
                </a>
              </div>
            </div>
          </div>
        </Container>
      </MainProjetos>

      <FooterProjetos>
        <Container>
          <div>
            <h3>Todos os direitos reservados.</h3>
          </div>
        </Container>
      </FooterProjetos>
    </SectionProjetos>
  );
};
