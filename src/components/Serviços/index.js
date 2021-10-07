import React from 'react';
import Card from '../Atomic/Card';
import Img5 from '../../img/manicure4.jpeg'
import Img2 from '../../img/manicure2.jpeg'
import Img1 from '../../img/manicure1.jpeg'
import Img6 from '../../img/manicure6.jpeg'
import {Container,Title,ContainerCard}from './styled'

function Service() {
  return (
    <Container>
      <Title>
        <h1>NAIL DESIGNER</h1>
        <h4>A Nail Art é uma maneira criativa de pintar, decorar, realçar, e embelezar as unhas.
          É um tipo de arte que pode ser feito nas unhas das mãos e dos pés.
          <br /> O Studio Nails Designer fica localizado na Rua Voluntários da pátria n 280 ,Arcoverde -PE.
          <br />Somos especialistas em Designer em Gel . </h4>
      </Title>

      <ContainerCard>
        
        <Card
          img={Img2}
          title='Nail Designer'
        />
        
        
        <Card
          img={Img1}
          title='Fibra de Vidro/TIP'
        />
        
        
        <Card
          img={Img6}
          title='Natural/Nair Arte'
        />
        
       
        <Card
          img={Img5}
          title=' Acrigel'
        />
        
      </ContainerCard>
    </Container>
  );
}

export default Service;