import React from 'react';
import * as S from './styled'
import Whats from '../../../img/Icons/whatsapp.svg'
import Face from '../../../img/Icons/facebook.svg'
import Inst from '../../../img/Icons/instagram.svg'

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

                <a href="#"> <img src={Whats} /></a>

                <a href="#">  <img src={Face} /></a>

                <a href="#"> <img src={Inst} /></a>

            </S.Redes>

        </S.Container>
    );
}

export default Menu;