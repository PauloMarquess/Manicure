import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10%;
  flex-direction: column;
`;
export const Title = styled.div`
  display: grid;
  text-align: center;
  margin-top: 20px;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    h4 {
      text-align: center;
      font-size: 16.6px;
      padding: 0 16px;

      br {
        display: none;
      }
    }
  }
`;
export const ContainerCard = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-left: 5%;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: 7%;
  }
`;
