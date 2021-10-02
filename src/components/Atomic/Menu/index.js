import React from 'react';
import * as S from './styled'

import Instagram from '../../../img/Icons/instagram.png'
import Whatsapp from '../../../img/Icons/whatsapp.png'
import Facebook from '../../../img/Icons/facebook.png'

function Menu() {
    return (
        <S.Container>

            <S.List>
                <li> <S.Link href="#">Inicio</S.Link></li>
                <li> <S.Link href="#">Serviços</S.Link></li>
                <li> <S.Link href="#">Reservas</S.Link></li>
                <li> <S.Link href="#">Fotos</S.Link></li>
                <li> <S.Link href="#">Contato</S.Link></li>
            </S.List>

            <S.Redes>

                <a href="#"> <S.Img src={Whatsapp} /></a>

                <a href="#">  <S.Img src={Facebook} /></a>

                <a href="#"> <S.Img src={Instagram} /></a>

            </S.Redes>

        </S.Container>
    );
}

export default Menu;