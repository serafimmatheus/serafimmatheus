import { MidiasSociais } from "./style";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";

export const Midias = () => {
  const { boderMidias } = useContext(HomeContext);
  return (
    <MidiasSociais boderMidias={boderMidias}>
      <ul>
        <li>
          <a target="_blank" href="https://www.facebook.com/MathSerafim">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/serafimmatheus">
            <FaGithub />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/matheuso_s/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/matheus-serafim-753893a7/"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </MidiasSociais>
  );
};
