import React from 'react';
import {Container,Btn,Spam} from './styled'


function Top() {
    return (
        <Container>
            <div>
                <h1>Nany Moura</h1>
            </div>

            <div>
                <h4>Telefone:(87) 99623-3325 | Aberto : 8:<Spam>00</Spam>-18:<Spam>00</Spam> Segunda à Sexta</h4>
            </div>

            <div>
                <Btn> Agendar Horário</Btn>
            </div>
        </Container>
    );
}

export default Top;