import React from "react";
import styled from "styled-components";
import image from "../images/lånepenge.png";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stak indhold vertikalt */
    text-align: center; /* Centrér tekst for små skærme */
    padding: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  max-width: 600px;
  h1 {
    font-size: 2.5rem;
    font-weight: 0;
    color: #000;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem; /* Mindre font til iPhones */
    }
  }
  @media (max-width: 480px) {
    font-size: 1.8rem; /* Endnu mindre for meget små skærme */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80wh;
    height: auto;

    @media (max-width: 1000px) {
      width: 100%; /* Lille afstand til tekst på små skærme */
    }
    @media (max-width: 480px) {
      width: 100%; /* Mindre bredde til meget små skærme */
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Content>
        <h1>Sammenlign lån fra op til 4 banker</h1>
        <p>Sammenlign lånetilbud nemt og hurtigt med kun én ansøgning.</p>
      </Content>

      <ImageContainer>
        <img src={image} alt="Loan illustration" />
      </ImageContainer>
    </HomeContainer>
  );
}

export default Home;
