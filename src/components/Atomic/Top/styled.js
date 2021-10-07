import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;

  h1 {
    font-family: 'Ephesis', cursive;
    font-size: 2.5rem;
  }

  @media (max-width:768px) {
    flex-direction: column;

    h4 {
      
      padding: 5px;
      text-rendering: auto;
      text-align: center;
    }
  }

  @media (max-width:450px) {

    h4 {
      font-size: 13px;
    }
  }
`;


export const Btn =styled.button`
width: 160px;
height: 35px;
border-radius:50px;
border:none;

color: #FFFF;
background: linear-gradient(
-90deg
,#f9b8f8 0%,#b2abfe 100%);
font-family:auto ;
:hover {
    cursor: pointer;
    background: #2e2c41;
   
}
`
export const Spam =styled.span `
font-size: 13px;

@media (max-width:768px) {
  font-size: 10px;
}
`
