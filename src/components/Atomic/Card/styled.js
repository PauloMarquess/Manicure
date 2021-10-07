import styled from 'styled-components';

export const Container = styled.div`
 
 width: 20%;

 @media (max-width:768px) {

    width: 90%;
 }
`;
export const Img =styled.img`
width: 100%;
border-top-right-radius: 90px;
border-top-left-radius: 90px;
height:220px;

`
export const Card =styled.div`
width:80%;
margin-left: 10px;
margin-top: 25px;

@media (max-width:399px) {
   width: 80%;
}

@media (max-width:768px) and (min-width:400px) {
   width: 40%;
}
`


export const H2 =styled.h2 `

text-align: center;
margin-top:-15px ;
background: linear-gradient(
-90deg
,#f9b8f8 0%,#b2abfe 100%);

`

