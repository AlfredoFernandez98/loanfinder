import React from "react";
import styled from "styled-components";

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

const ProcessSection = styled.section`
  margin-bottom: var(--space-16);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-12);
`;

const ProcessStep = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  padding: var(--space-10);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    background: rgba(255, 255, 255, 0.98);
  }

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

  &:hover::before {
    left: 100%;
  }

  .step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-6);
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: white;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
  }

  &:hover .step-number {
    transform: scale(1.1) rotate(10deg);
    box-shadow: var(--shadow-lg);
  }

  .step-icon {
    width: 60px;
    height: 60px;
    background: var(--gray-100);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-4);
    font-size: var(--font-size-xl);
    color: var(--gray-600);
  }

  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-4);
    text-align: center;
  }

  p {
    color: var(--gray-700);
    line-height: 1.6;
    text-align: center;
    margin-bottom: var(--space-6);
  }

  .step-details {
    background: rgba(59, 130, 246, 0.05);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    border-left: 4px solid var(--primary-500);

    .detail-item {
      display: flex;
      align-items: center;
      margin-bottom: var(--space-2);
      font-size: var(--font-size-sm);
      color: var(--gray-600);

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        margin-right: var(--space-2);
        color: var(--primary-600);
      }
    }
  }

  &:nth-child(1) {
    animation: slideInLeft 1s ease-out 0.6s both;
  }

  &:nth-child(2) {
    animation: fadeInUp 1s ease-out 0.8s both;
  }

  &:nth-child(3) {
    animation: slideInRight 1s ease-out 1s both;
  }

  &:nth-child(4) {
    animation: fadeInUp 1s ease-out 1.2s both;
  }

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

const BenefitsSection = styled.section`
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: var(--radius-2xl);
  padding: var(--space-16) var(--space-6);
  text-align: center;
  color: white;
  margin: var(--space-16) 0;
  animation: fadeInUp 1s ease-out 1.4s both;

  h2 {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--space-8);
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-8);
    margin-top: var(--space-8);

    .benefit {
      .icon {
        font-size: var(--font-size-4xl);
        margin-bottom: var(--space-4);
      }

      .title {
        font-size: var(--font-size-lg);
        font-weight: 600;
        margin-bottom: var(--space-2);
      }

      .description {
        font-size: var(--font-size-sm);
        opacity: 0.9;
      }
    }
  }
`;

const TimelineSection = styled.section`
  margin: var(--space-16) 0;
`;

const Timeline = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-200), var(--primary-600));
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-8);
  position: relative;

  &:nth-child(odd) {
    flex-direction: row;

    .timeline-content {
      margin-right: var(--space-6);
      text-align: right;
    }

    .timeline-dot {
      order: 2;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    .timeline-content {
      margin-left: var(--space-6);
      text-align: left;
    }
  }

  .timeline-content {
    flex: 1;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(255, 255, 255, 0.2);

    .time {
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--primary-600);
      margin-bottom: var(--space-2);
    }

    .title {
      font-size: var(--font-size-base);
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: var(--space-2);
    }

    .description {
      font-size: var(--font-size-sm);
      color: var(--gray-600);
    }
  }

  .timeline-dot {
    width: 20px;
    height: 20px;
    background: var(--primary-600);
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 0 4px var(--primary-200);
    z-index: 2;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center !important;

    .timeline-content {
      margin: var(--space-4) 0 0 0 !important;
      text-align: center !important;
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--space-4);
`;

function HowItWorks() {
  return (
    <PageContainer>
      <HeroSection>
        <Title>Sådan virker LoanFinder</Title>
        <Subtitle>
          Fra ansøgning til godkendelse på under 24 timer - helt gratis og uden binding
        </Subtitle>
      </HeroSection>

      <ProcessSection>
        <SectionTitle>4 simple trin til dit perfekte lån</SectionTitle>
        <ProcessGrid>
          <ProcessStep>
            <div className="step-number">1</div>
            <div className="step-icon">1</div>
            <h3>Udfyld ansøgning</h3>
            <p>Besvar få spørgsmål om dit lånebehov, økonomi og ønskede beløb. Det tager kun 2-3 minutter.</p>
            <div className="step-details">
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Tid: 2-3 minutter</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>100% sikker SSL-kryptering</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Virker på alle enheder</span>
              </div>
            </div>
          </ProcessStep>

          <ProcessStep>
            <div className="step-number">2</div>
            <div className="step-icon">2</div>
            <h3>Vi matcher dig med banker</h3>
            <p>Vores system finder de bedste banker til din profil og sender din ansøgning videre automatisk.</p>
            <div className="step-details">
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Automatisk matching</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>12+ bank partnere</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>97% godkendelsesrate</span>
              </div>
            </div>
          </ProcessStep>

          <ProcessStep>
            <div className="step-number">3</div>
            <div className="step-icon">3</div>
            <h3>Modtag tilbud</h3>
            <p>Få op til 4 konkurrencedygtige lånetilbud med transparent sammenligning af renter og vilkår.</p>
            <div className="step-details">
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Op til 4 tilbud</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Svar inden for 24 timer</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Transparent priser</span>
              </div>
            </div>
          </ProcessStep>

          <ProcessStep>
            <div className="step-number">4</div>
            <div className="step-icon">4</div>
            <h3>Vælg dit lån</h3>
            <p>Sammenlign tilbuddene og vælg det bedste. Vi hjælper dig gennem hele processen.</p>
            <div className="step-details">
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Personlig rådgivning</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Telefonisk support</span>
              </div>
              <div className="detail-item">
                <span className="icon">•</span>
                <span>Garanteret bedste pris</span>
              </div>
            </div>
          </ProcessStep>
        </ProcessGrid>
      </ProcessSection>

      <BenefitsSection>
        <h2>Derfor vælger 127.000+ danskere LoanFinder</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="title">Spar penge</div>
            <div className="description">Gns. besparelse på 23.500 kr per lån</div>
          </div>
          <div className="benefit">
            <div className="title">Spar tid</div>
            <div className="description">Kun én ansøgning til alle banker</div>
          </div>
          <div className="benefit">
            <div className="title">100% sikkert</div>
            <div className="description">Bank-niveau sikkerhed og GDPR</div>
          </div>
          <div className="benefit">
            <div className="title">Helt gratis</div>
            <div className="description">Ingen skjulte gebyrer eller omkostninger</div>
          </div>
        </div>
      </BenefitsSection>

      <TimelineSection>
        <SectionTitle>Typisk forløb fra start til mål</SectionTitle>
        <Timeline>
          <TimelineItem>
            <div className="timeline-content">
              <div className="time">0 min</div>
              <div className="title">Start ansøgning</div>
              <div className="description">Du påbegynder din låneansøgning online</div>
            </div>
            <div className="timeline-dot"></div>
          </TimelineItem>

          <TimelineItem>
            <div className="timeline-content">
              <div className="time">2-3 min</div>
              <div className="title">Ansøgning sendt</div>
              <div className="description">Din ansøgning sendes automatisk til relevante banker</div>
            </div>
            <div className="timeline-dot"></div>
          </TimelineItem>

          <TimelineItem>
            <div className="timeline-content">
              <div className="time">2-6 timer</div>
              <div className="title">Første tilbud</div>
              <div className="description">Du modtager de første lånetilbud via email og SMS</div>
            </div>
            <div className="timeline-dot"></div>
          </TimelineItem>

          <TimelineItem>
            <div className="timeline-content">
              <div className="time">24 timer</div>
              <div className="title">Alle tilbud klar</div>
              <div className="description">Alle banker har svaret - du kan nu sammenligne</div>
            </div>
            <div className="timeline-dot"></div>
          </TimelineItem>

          <TimelineItem>
            <div className="timeline-content">
              <div className="time">1-3 dage</div>
              <div className="title">Lån godkendt</div>
              <div className="description">Efter valg af tilbud, endelig godkendelse og udbetaling</div>
            </div>
            <div className="timeline-dot"></div>
          </TimelineItem>
        </Timeline>
      </TimelineSection>
    </PageContainer>
  );
}

export default HowItWorks;
