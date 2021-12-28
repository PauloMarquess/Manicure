import React from "react";
import {
  Container,
  Logo,
  ContainerIcons,
  Icons,
  Copy,
  ContainerContact,
  Contact,
} from "./styled";
import Img from "../../img/flor.png";
import Whats from "../../img/Icons/whatsapp.svg";
import Inst from "../../img/Icons/instagram.svg";
import Face from "../../img/Icons/facebook.svg";

function Footer() {
  return (
    <Container>
      <div>
        <h1>Nany Moura</h1>
      </div>

      <Logo>
        <p>________________</p>
        <img src={Img} width="30px" />
        <p>________________</p>
      </Logo>

      <ContainerIcons>
        <Icons href="#">
          <img src={Whats} />
        </Icons>
        <Icons href="#">
          <img src={Inst} />
        </Icons>
        <Icons href="#">
          <img src={Face} />
        </Icons>
      </ContainerIcons>

      <Copy>
        <p>
          About &nbsp;|&nbsp; Termos & Conditions &nbsp;|&nbsp; Privacy Policy
          &nbsp;|&nbsp; Contact
        </p>
        <p>copyright ©2021 PauloMarques</p>
      </Copy>

      <ContainerContact>
        <Contact>
          {" "}
          <a href="#">Rua Voluntários n 280 ,Arcoverde -PE</a>
        </Contact>
        <Contact>
          {" "}
          <a href="#">Telefone:(87) 99623-3325</a>
        </Contact>
        <Contact>
          {" "}
          <a href="#">Email:paulinho_marques2012@hotmail.com</a>
        </Contact>
      </ContainerContact>
    </Container>
  );
}

export default Footer;
