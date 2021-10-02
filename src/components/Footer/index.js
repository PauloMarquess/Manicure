import React from 'react';
import * as S from './styled'
import Img from '../../img/flor.png'
import Whats from '../../img/Icons/whatsapp.svg'
import Inst from '../../img/Icons/instagram.svg'
import Face from '../../img/Icons/facebook.svg'

function Footer() {
    return (
        <S.Container>
            <div>
                <h1>Nany Moura</h1>
            </div>

            <S.Destak>
                <p>________________</p>
                <img src={Img} width="30px" />
                <p>________________</p>
            </S.Destak>

            <S.ContIcon>

                <S.Icons href="#"><img src={Whats} /></S.Icons>
                <S.Icons href="#"><img src={Inst} /></S.Icons>
                <S.Icons href="#"><img src={Face} /></S.Icons>
            </S.ContIcon>

            <S.Copy >
                <p>About &nbsp;|&nbsp; Termos & Conditions &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Contact</p>
                <p>copyright ©2021 PauloMarques</p>
            </S.Copy>

            <S.ContainerContact>
                <S.Contact> <a href="#">Rua Voluntários da pátria n 280 ,Arcoverde -PE</a></S.Contact>
                <S.Contact> <a href="#">Telefone:(87) 99623-3325</a></S.Contact>
                <S.Contact> <a href="#">Email:paulinho_marques2012@hotmail.com</a></S.Contact>
            </S.ContainerContact>

        </S.Container>
    );
}

export default Footer;