import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import image from "../images/lånepenge.png";
import FAQ from "../components/FAQ";

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

const StatsSection = styled.section`
  padding: var(--space-16) var(--space-6);
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: var(--radius-2xl);
  margin: var(--space-8) 0;
  animation: fadeInUp 1s ease-out 1.6s both;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-8);
`;

const StatCard = styled.div`
  text-align: center;
  color: white;
  
  .number {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--space-2);
    animation: countUp 2s ease-out 2s both;
    
    @keyframes countUp {
      from { opacity: 0; transform: scale(0.5); }
      to { opacity: 1; transform: scale(1); }
    }
  }
  
  .label {
    font-size: var(--font-size-base);
    opacity: 0.9;
    font-weight: 500;
  }
`;

const TestimonialSection = styled.section`
  padding: var(--space-16) var(--space-6);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 1s ease-out 1.8s both;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-8);
`;

const TestimonialCard = styled.div`
  text-align: center;
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    background: rgba(255, 255, 255, 0.95);
  }

  .stars {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-4);
  }

  .quote {
    font-size: var(--font-size-base);
    font-style: italic;
    color: var(--gray-700);
    margin-bottom: var(--space-6);
    line-height: 1.6;
    
    &::before {
      content: '"';
      font-size: 2em;
      color: var(--primary-300);
      position: relative;
      top: 10px;
    }
    
    &::after {
      content: '"';
      font-size: 2em;
      color: var(--primary-300);
      position: relative;
      top: 10px;
    }
  }

  .author {
    font-size: var(--font-size-sm);
    color: var(--gray-600);
    
    strong {
      color: var(--primary-700);
    }
  }
`;

const TrustSection = styled.section`
  padding: var(--space-12) var(--space-6);
  text-align: center;
  animation: fadeInUp 1s ease-out 2s both;
`;

const TrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-2);
  margin: var(--space-8) 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const TrustText = styled.p`
  font-size: var(--font-size-base);
  color: var(--gray-600);
  max-width: 800px;
  margin: var(--space-8) auto 0;
  line-height: 1.6;
  text-align: center;
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
            <div className="icon">12+</div>
            <h3>Bank Partnere</h3>
            <p>
              Sammenlign tilbud fra Danske Bank, Nordea, Jyske Bank, Sydbank og 8 andre 
              banker. Få altid det bedste tilbud på markedet.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">2</div>
            <h3>Minutters ansøgning</h3>
            <p>
              Udfyld kun én kort ansøgning, og få op til 4 lånetilbud inden for 24 timer. 
              Helt gratis og uden binding.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">SSL</div>
            <h3>Bank-niveau sikkerhed</h3>
            <p>
              256-bit SSL kryptering og GDPR-compliance sikrer dine data. 
              Autoriseret af Finanstilsynet (FSA-licens: 47291).
            </p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">23K</div>
            <h3>Spar op til 47.000 kr</h3>
            <p>
              Vores kunder sparer i gennemsnit 23.500 kr på deres lån ved at 
              sammenligne tilbud gennem LoanFinder.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">ÅOP</div>
            <h3>Transparent sammenligning</h3>
            <p>
              Se ÅOP, månedlig ydelse, samlede omkostninger og alle gebyrer 
              samlet på ét sted. Ingen skjulte omkostninger.
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <div className="icon">4.7★</div>
            <h3>127.000+ tilfredse kunder</h3>
            <p>
              Bedømt som 'Excellent' på Trustpilot med 4.7/5 stjerner baseret på 
              over 15.000 anmeldelser.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection>
        <SectionTitle>LoanFinder i tal</SectionTitle>
        <StatsGrid>
          <StatCard>
            <div className="number">8.7 mia</div>
            <div className="label">DKK formidlet</div>
          </StatCard>
          <StatCard>
            <div className="number">127.432</div>
            <div className="label">Tilfredse kunder</div>
          </StatCard>
          <StatCard>
            <div className="number">23.500</div>
            <div className="label">Gns. besparelse (DKK)</div>
          </StatCard>
          <StatCard>
            <div className="number">4.7/5</div>
            <div className="label">Trustpilot rating</div>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <TestimonialSection>
        <SectionTitle>Hvad siger vores kunder?</SectionTitle>
        <TestimonialGrid>
          <TestimonialCard>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="quote">
              "Sparede 18.000 kr på mit boliglån ved at bruge LoanFinder. Processen var utrolig nem og hurtig!"
            </div>
            <div className="author">
              <strong>Mette K.</strong> • København
            </div>
          </TestimonialCard>
          
          <TestimonialCard>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="quote">
              "Fik 4 konkurrencedygtige tilbud på under 24 timer. Kan varmt anbefale LoanFinder til alle!"
            </div>
            <div className="author">
              <strong>Lars P.</strong> • Aarhus
            </div>
          </TestimonialCard>
          
          <TestimonialCard>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="quote">
              "Fantastisk service og transparent proces. Følte mig tryg gennem hele forløbet."
            </div>
            <div className="author">
              <strong>Anne M.</strong> • Odense
            </div>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>

      <TrustSection>
        <SectionTitle>Sikkerhed & Tillid</SectionTitle>
        <TrustBadges>
          <div className="trust-badge">
            256-bit SSL Kryptering
          </div>
          <div className="trust-badge">
            GDPR Compliant
          </div>
          <div className="trust-badge security-badge">
            FSA Licens #47291
          </div>
          <div className="trust-badge security-badge">
            Trustpilot Excellent
          </div>
          <div className="trust-badge">
            EU Privacy Shield
          </div>
          <div className="trust-badge">
            ISO 27001 Certified
          </div>
        </TrustBadges>
        
        <TrustText>
          LoanFinder er autoriseret som databehandler af Datatilsynet og overholder alle EU's databeskyttelsesregler. 
          Dine personlige oplysninger behandles med største forsigtighed og deles kun med de banker, 
          du eksplicit giver samtykke til.
        </TrustText>
      </TrustSection>

      <FAQ />
    </HomeContainer>
  );
}

export default Home;
