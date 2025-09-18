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
    grid-template-columns: 1fr 1fr;
  }
`;

const ServiceCard = styled.div`
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

const ContactCard = styled.div`
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

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--space-4);
  background: rgba(59, 130, 246, 0.05);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--primary-500);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(8px);
    box-shadow: var(--shadow-md);
    border-left-width: 6px;
  }

  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--space-4);
    font-size: var(--font-size-xl);
    color: white;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-md);
  }

  &:hover .icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: var(--shadow-lg);
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
      
      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover {
          color: var(--primary-600);
        }
      }
    }
  }
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: linear-gradient(135deg, var(--success), #16a085);
  color: white;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-top: var(--space-4);
  box-shadow: var(--shadow-md);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
  }

  .dot {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-right: var(--space-2);
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

function CustomerService() {
  return (
    <PageContainer>
      <HeroSection>
        <Title>Kundeservice</Title>
        <Subtitle>
          Vi er her for at hjælpe dig med alle dine spørgsmål om lån og vores tjenester
        </Subtitle>
      </HeroSection>

      <ContentGrid>
        <ServiceCard>
          <SectionTitle>Hvordan kan vi hjælpe?</SectionTitle>
          <Paragraph>
            Hos <Highlight>LoanFinder</Highlight> er vi her for at hjælpe dig. Vores kundeserviceteam står klar til at svare på dine spørgsmål og sikre, at du får den bedste oplevelse med vores platform.
          </Paragraph>
          <Paragraph>
            Du kan kontakte os via flere kanaler, og vi bestræber os på at vende tilbage til dig inden for <Highlight>24 timer</Highlight>.
          </Paragraph>
          <Paragraph>
            Vi ser frem til at hjælpe dig og gøre din oplevelse så nem og problemfri som muligt.
          </Paragraph>

          <AvailabilityBadge>
            <div className="dot"></div>
            Online nu - Klar til at hjælpe
          </AvailabilityBadge>
        </ServiceCard>

        <ContactCard>
          <SectionTitle>Kontakt os</SectionTitle>
          <ContactList>
            <ContactItem>
              <div className="icon">E</div>
              <div className="content">
                <div className="label">Email</div>
                <div className="value">
                  <a href="mailto:support@loanfinder.dk">support@loanfinder.dk</a>
                </div>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">T</div>
              <div className="content">
                <div className="label">Telefon</div>
                <div className="value">
                  <a href="tel:+4570203040">+45 70 20 30 40</a>
                </div>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">T</div>
              <div className="content">
                <div className="label">Åbningstider</div>
                <div className="value">Mandag - Fredag: 09:00 - 17:00</div>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">A</div>
              <div className="content">
                <div className="label">Adresse</div>
                <div className="value">
                  LoanFinder A/S<br />
                  Vesterbrogade 1<br />
                  8000 Aarhus
                </div>
              </div>
            </ContactItem>
          </ContactList>
        </ContactCard>
      </ContentGrid>
    </PageContainer>
  );
}

export default CustomerService;
