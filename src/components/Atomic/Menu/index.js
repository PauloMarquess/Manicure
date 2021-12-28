import React from "react";
import { Container, Nav, Redes } from "./styled";

import Instagram from "../../../img/Icons/instagram.png";
import Whatsapp from "../../../img/Icons/whatsapp.png";
import Facebook from "../../../img/Icons/facebook.png";

function Menu() {
  return (
    <Container>
      <Nav>
        <li>
          {" "}
          <a href="#">Inicio</a>
        </li>
        <li>
          {" "}
          <a href="#">Serviços</a>
        </li>
        <li>
          {" "}
          <a href="#">Reservas</a>
        </li>
        <li>
          {" "}
          <a href="#">Fotos</a>
        </li>
        <li>
          {" "}
          <a href="#">Contato</a>
        </li>
      </Nav>
      <Redes>
        <a href="#">
          {" "}
          <img src={Whatsapp} />
        </a>
        <a href="#">
          {" "}
          <img src={Facebook} />
        </a>
        <a href="#">
          {" "}
          <img src={Instagram} />
        </a>
      </Redes>
    </Container>
  );
}

export default Menu;
