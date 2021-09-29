import React from 'react';
import * as S from './styled'


function Top() {
    return (
        <S.Container>
            <div>
                <S.Logo>Nani</S.Logo>
            </div>

            <div>
                <h4>Telefone:(87) 99105-4786 | Aberto : 8:<S.Child>00</S.Child>-18:<S.Child>00</S.Child> Segunda à Sexta</h4>
            </div>

            <div>
                <S.Btn> Agendar Horário</S.Btn>
            </div>
        </S.Container>
    );
}

export default Top;