import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: var(--max-width-xl);
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: var(--space-16);
  animation: slideInDown 0.8s ease-out;

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-4);
  animation: fadeInUp 1s ease-out 0.2s both;
`;

const Subtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.4s both;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const StorySection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  padding: var(--space-10);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInLeft 1s ease-out 0.6s both;

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
`;

const StatsCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInRight 1s ease-out 0.8s both;

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
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--space-6);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--gray-700);
  margin-bottom: var(--space-6);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: var(--primary-700);
  background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
`;

const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--space-4);
  background: rgba(59, 130, 246, 0.05);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--primary-500);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(8px);
    box-shadow: var(--shadow-md);
  }

  .icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--space-4);
    font-size: var(--font-size-lg);
    color: white;
    transition: all 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.1) rotate(5deg);
  }

  .content {
    flex: 1;

    .label {
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--gray-600);
      margin-bottom: var(--space-1);
    }

    .value {
      font-size: var(--font-size-base);
      font-weight: 600;
      color: var(--gray-900);
    }
  }
`;

function About() {
  return (
    <PageContainer>
      <HeroSection>
        <Title>Om LoanFinder</Title>
        <Subtitle>
          Din pålidelige partner til at finde de bedste lånetilbud i Skandinavien
        </Subtitle>
      </HeroSection>

      <ContentGrid>
        <StorySection>
          <SectionTitle>Vores Historie</SectionTitle>
          <Paragraph>
            <Highlight>LoanFinder</Highlight> blev grundlagt i 2018 af to visionære iværksættere, Clara Jensen og Michael Sørensen, der ønskede at gøre det nemmere for folk at finde de bedste lån på markedet. Missionen var at skabe en digital platform, hvor brugere kunne sammenligne lån baseret på deres behov, uden at skulle navigere gennem komplekse og skjulte vilkår.
          </Paragraph>
          <Paragraph>
            Virksomheden startede som en lille startup i Aarhus med kun fire medarbejdere, men voksede hurtigt takket være deres brugervenlige teknologi og kundecentrerede tilgang. I dag har LoanFinder over 150 medarbejdere fordelt på kontorer i København, Aarhus og Odense. Virksomheden har desuden udvidet til flere europæiske markeder som Sverige, Norge og Tyskland.
          </Paragraph>
          <Paragraph>
            Vi er stolte af at have hjulpet over 100.000 kunder med at finde deres ideelle lån og har formidlet lån for over 5 milliarder kroner siden vores start.
          </Paragraph>
        </StorySection>

        <StatsCard>
          <SectionTitle>Nøgletal</SectionTitle>
          <StatsList>
            <StatItem>
              <div className="icon">🏢</div>
              <div className="content">
                <div className="label">Grundlagt</div>
                <div className="value">2018</div>
              </div>
            </StatItem>

            <StatItem>
              <div className="icon">🏠</div>
              <div className="content">
                <div className="label">Hovedkontor</div>
                <div className="value">Aarhus, Danmark</div>
              </div>
            </StatItem>

            <StatItem>
              <div className="icon">👥</div>
              <div className="content">
                <div className="label">Medarbejdere</div>
                <div className="value">150+</div>
              </div>
            </StatItem>

            <StatItem>
              <div className="icon">🌍</div>
              <div className="content">
                <div className="label">Markeder</div>
                <div className="value">DK, SE, NO, DE</div>
              </div>
            </StatItem>

            <StatItem>
              <div className="icon">🎯</div>
              <div className="content">
                <div className="label">Mål 2030</div>
                <div className="value">Førende i Europa</div>
              </div>
            </StatItem>
          </StatsList>
        </StatsCard>
      </ContentGrid>
    </PageContainer>
  );
}

export default About;
