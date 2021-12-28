import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  background: #2e2c41;
  display: flex;
  padding-top: 5px;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;

  a {
    color: #ffff;

    :hover {
      color: #f9b8f8;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Redes = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  align-items: center;
  padding-top: 6px;

  img {
    width: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
