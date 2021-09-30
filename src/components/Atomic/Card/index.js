import React from 'react';
import * as S from './styled'

// import { Container } from './styles';

function Card({ img, title }) {
    return (
        <S.Container>
            <S.Card>
                <S.Img src={img} />
                <S.H2>{title}</S.H2>
            </S.Card>
        </S.Container>
    );
}

export default Card;