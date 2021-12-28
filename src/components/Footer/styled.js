import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60vh;
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
`;
export const Icons = styled.a`
  width: 50px;
  background: linear-gradient(-90deg, #f9b8f8 0%, #b2abfe 100%);
  margin: 10px;
  border-radius: 70px;
  padding-top: 10px;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
  }
`;

export const Copy = styled.div`
  color: #a9a7b3;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Contact = styled.div`
  padding: 10px;
  border: 2px solid #f9b8f8;
  margin: 2%;
  width: 300px;
  @media (max-width: 769px) {
    width: 90%;
  }

  a {
    color: #000;
  }
`;
export const ContainerContact = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    justify-content: center;
    margin: 0 30px;
    display: inline-flex;
    padding: 0;
  }
`;
