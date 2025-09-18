import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import image from "../images/lånepenge.png";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  padding: var(--space-8) var(--space-4);
  max-width: var(--max-width-xl);
  margin: 0 auto;
  width: 100%;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
    text-align: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  animation: slideInLeft 0.8s ease-out;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--gray-900);
    line-height: 1.1;
    margin-bottom: var(--space-4);
    animation: fadeInUp 1s ease-out 0.2s both;

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      font-size: var(--font-size-3xl);
    }
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: var(--space-6);
    animation: fadeInUp 1s ease-out 0.4s both;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s both;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-base);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    background: linear-gradient(135deg, var(--primary-700) 0%, var(--primary-800) 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
`;

const SecondaryButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-600);
  text-decoration: none;
  border: 2px solid var(--primary-200);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-base);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    background: var(--primary-50);
    border-color: var(--primary-400);
    color: var(--primary-700);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
  }

  &:active {
    transform: translateY(0) scale(1.01);
    transition: all 0.1s ease;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: slideInRight 0.8s ease-out;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: float 6s ease-in-out infinite;

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    &:hover {
      transform: scale(1.05) translateY(-5px);
      box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
    border-radius: var(--radius-2xl);
    z-index: -1;
    opacity: 0.5;
    transition: all 0.4s ease;
    animation: floatShadow 6s ease-in-out infinite;

    @keyframes floatShadow {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  }

  &:hover::before {
    opacity: 0.7;
    transform: scale(1.02);
  }
`;

const FeaturesSection = styled.section`
  padding: var(--space-16) var(--space-6);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 1s ease-out 0.8s both;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-8);
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(59, 130, 246, 0.3);

    &::before {
      left: 100%;
    }

    .icon {
      transform: scale(1.1) rotate(5deg);
      background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
      color: white;
    }

    h3 {
      color: var(--primary-700);
    }
  }

  .icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-4);
    font-size: var(--font-size-2xl);
    transition: all 0.3s ease;
    box-shadow: var(--shadow-md);
  }

  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
    transition: all 0.3s ease;
  }

  p {
    font-size: var(--font-size-sm);
    color: var(--gray-600);
    line-height: 1.6;
    transition: all 0.3s ease;
  }

  &:nth-child(1) {
    animation: fadeInUp 1s ease-out 1s both;
  }

  &:nth-child(2) {
    animation: fadeInUp 1s ease-out 1.2s both;
  }

  &:nth-child(3) {
    animation: fadeInUp 1s ease-out 1.4s both;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--space-4);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Sammenlign lån fra op til 4 banker</h1>
          <p>
            Sammenlign lånetilbud nemt og hurtigt med kun én ansøgning. 
            Få det bedste tilbud og spar tid og penge på din lånefinansiering.
          </p>
          <CTAButtons>
            <PrimaryButton to="/signup">
              Kom i gang nu
            </PrimaryButton>
            <SecondaryButton to="/about">
              Læs mere
            </SecondaryButton>
          </CTAButtons>
        </HeroContent>

        <ImageContainer>
          <img src={image} alt="Loan illustration" />
        </ImageContainer>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Hvorfor vælge LoanFinder?</SectionTitle>
        <SectionSubtitle>
          Vi gør det nemt at finde det perfekte lån til dine behov
        </SectionSubtitle>
        
        <FeaturesGrid>
          <FeatureCard>
            <div className="icon">🏦</div>
            <h3>Sammenlign banker</h3>
            <p>
              Få tilbud fra op til 4 forskellige banker og find den bedste rente 
              og de mest favorable vilkår.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">⚡</div>
            <h3>Hurtig proces</h3>
            <p>
              Kun én ansøgning er nødvendig. Vi sender din ansøgning til alle 
              relevante banker automatisk.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">🔒</div>
            <h3>Sikker og tryg</h3>
            <p>
              Dine data er beskyttet med den højeste sikkerhedsstandard. 
              Vi deler aldrig dine oplysninger uden dit samtykke.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
}

export default Home;
