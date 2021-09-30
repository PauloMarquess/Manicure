import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
`;

export const Logo =styled.h1`
font-family: 'Ephesis', cursive;
font-size: 2.5rem;
`
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
    background: linear-gradient(
-90deg
,#b2abfe 0%,#f9b8f8 100%);
}
`
export const Child =styled.span `
font-size: 13px;
`
