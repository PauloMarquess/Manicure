import React from "react";
import { Slide } from "react-slideshow-image";
import Img1 from "../../img/manicure1.jpeg";
import Img2 from "../../img/manicure2.jpeg";
import Img3 from "../../img/manicure3.jpeg";
import Img4 from "../../img/manicure4.jpeg";
import Img5 from "../../img/manicure5.jpeg";
import Img6 from "../../img/manicure6.jpeg";
import Img7 from "../../img/manicure7.jpeg";
import Img8 from "../../img/manicure8.jpeg";
import {MainContainer,Container,Img} from "./styled";


const properties = {
  duration: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  indicators: false,
  arrow: false,
  infinity: true,
  canSwipe: true,
  pauseOnHover: true,
  
};

function SlideShow() {
  return (
    <MainContainer>
      <Container>
        <Slide {...properties}>
          <div>
            <Img src={Img1} />
          </div>
          <div>
            <Img src={Img2} />
          </div>
          <div>
            <Img src={Img3} />
          </div>
          <div>
            <Img src={Img4} />
          </div>
          <div>
            <Img src={Img5} />
          </div>
          <div>
            <Img src={Img6} />
          </div>
          <div>
            <Img src={Img7} />
          </div>
          <div>
            <Img src={Img8} />
          </div>
        </Slide>
      </Container>
    </MainContainer>
  );
}

export default SlideShow;
