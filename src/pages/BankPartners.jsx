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

const BankGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-16);
`;

const BankCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    background: rgba(255, 255, 255, 0.98);
  }

  .logo {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-6);
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--primary-700);
    transition: all 0.3s ease;
  }

  &:hover .logo {
    transform: scale(1.1);
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    color: white;
  }

  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
    text-align: center;
  }

  .details {
    margin-top: var(--space-4);
    
    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: var(--space-2) 0;
      border-bottom: 1px solid var(--gray-100);
      font-size: var(--font-size-sm);
      
      &:last-child {
        border-bottom: none;
      }
      
      .label {
        color: var(--gray-600);
      }
      
      .value {
        font-weight: 600;
        color: var(--gray-900);
      }
    }
  }

  &:nth-child(odd) {
    animation: slideInLeft 1s ease-out 0.6s both;
  }

  &:nth-child(even) {
    animation: slideInRight 1s ease-out 0.8s both;
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

const StatsSection = styled.div`
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: var(--radius-2xl);
  padding: var(--space-16) var(--space-6);
  text-align: center;
  color: white;
  animation: fadeInUp 1s ease-out 1s both;

  h2 {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--space-8);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-6);
    
    .stat {
      .number {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        margin-bottom: var(--space-2);
      }
      
      .label {
        font-size: var(--font-size-base);
        opacity: 0.9;
      }
    }
  }
`;

function BankPartners() {
  const banks = [
    {
      name: "Danske Bank",
      logo: "DB",
      minRate: "2.45%",
      maxLoan: "5.000.000",
      processing: "1-3 dage",
      specialty: "Boliglån",
      rating: "4.2/5",
      customers: "2.1M"
    },
    {
      name: "Nordea Bank",
      logo: "NO",
      minRate: "2.65%",
      maxLoan: "4.500.000",
      processing: "2-5 dage",
      specialty: "Forbrugslån",
      rating: "4.1/5",
      customers: "1.8M"
    },
    {
      name: "Jyske Bank",
      logo: "JB",
      minRate: "2.55%",
      maxLoan: "3.800.000",
      processing: "1-4 dage",
      specialty: "Billån",
      rating: "4.3/5",
      customers: "950K"
    },
    {
      name: "Sydbank",
      logo: "SB",
      minRate: "2.70%",
      maxLoan: "4.200.000",
      processing: "2-4 dage",
      specialty: "Erhvervslån",
      rating: "4.0/5",
      customers: "820K"
    },
    {
      name: "Arbejdernes Landsbank",
      logo: "AL",
      minRate: "2.85%",
      maxLoan: "3.500.000",
      processing: "1-5 dage",
      specialty: "Privatlån",
      rating: "4.4/5",
      customers: "650K"
    },
    {
      name: "Lån & Spar Bank",
      logo: "LS",
      minRate: "3.15%",
      maxLoan: "2.500.000",
      processing: "1-3 dage",
      specialty: "Kviklån",
      rating: "3.9/5",
      customers: "420K"
    },
    {
      name: "Ringkjøbing Landbobank",
      logo: "RL",
      minRate: "2.95%",
      maxLoan: "3.200.000",
      processing: "2-6 dage",
      specialty: "Landbrugslån",
      rating: "4.5/5",
      customers: "315K"
    },
    {
      name: "Vestjysk Bank",
      logo: "VB",
      minRate: "3.05%",
      maxLoan: "2.800.000",
      processing: "3-7 dage",
      specialty: "Lokale lån",
      rating: "4.2/5",
      customers: "280K"
    },
    {
      name: "Nykredit Bank",
      logo: "NK",
      minRate: "2.38%",
      maxLoan: "6.000.000",
      processing: "1-4 dage",
      specialty: "Realkreditlån",
      rating: "4.3/5",
      customers: "1.2M"
    },
    {
      name: "Handelsbanken",
      logo: "HB",
      minRate: "2.72%",
      maxLoan: "4.000.000",
      processing: "2-5 dage",
      specialty: "Personlige lån",
      rating: "4.1/5",
      customers: "890K"
    },
    {
      name: "Sparekassen Kronjylland",
      logo: "SK",
      minRate: "2.89%",
      maxLoan: "2.200.000",
      processing: "1-3 dage",
      specialty: "Lokalbankslån",
      rating: "4.6/5",
      customers: "165K"
    },
    {
      name: "Middelfart Sparekasse",
      logo: "MS",
      minRate: "3.12%",
      maxLoan: "1.800.000",
      processing: "2-4 dage",
      specialty: "Familiebankslån",
      rating: "4.7/5",
      customers: "95K"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Title>Vores Bank Partnere</Title>
        <Subtitle>
          Vi samarbejder med Danmarks mest velrenommerede banker for at give dig de bedste lånemuligheder
        </Subtitle>
      </HeroSection>

      <BankGrid>
        {banks.map((bank, index) => (
          <BankCard key={index}>
            <div className="logo">{bank.logo}</div>
            <h3>{bank.name}</h3>
            <div className="details">
              <div className="detail-item">
                <span className="label">Min. rente fra:</span>
                <span className="value">{bank.minRate}</span>
              </div>
              <div className="detail-item">
                <span className="label">Max lån:</span>
                <span className="value">{bank.maxLoan} DKK</span>
              </div>
              <div className="detail-item">
                <span className="label">Behandlingstid:</span>
                <span className="value">{bank.processing}</span>
              </div>
              <div className="detail-item">
                <span className="label">Speciale:</span>
                <span className="value">{bank.specialty}</span>
              </div>
              <div className="detail-item">
                <span className="label">Kunderating:</span>
                <span className="value">{bank.rating} ⭐</span>
              </div>
              <div className="detail-item">
                <span className="label">Kunder:</span>
                <span className="value">{bank.customers}</span>
              </div>
            </div>
          </BankCard>
        ))}
      </BankGrid>

      <StatsSection>
        <h2>Samarbejdsstatistikker</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="number">12</div>
            <div className="label">Bank partnere</div>
          </div>
          <div className="stat">
            <div className="number">97%</div>
            <div className="label">Godkendelsesrate</div>
          </div>
          <div className="stat">
            <div className="number">24 timer</div>
            <div className="label">Gns. svartid</div>
          </div>
          <div className="stat">
            <div className="number">2.38%</div>
            <div className="label">Laveste rente</div>
          </div>
          <div className="stat">
            <div className="number">8.7M+</div>
            <div className="label">Samlede kunder</div>
          </div>
          <div className="stat">
            <div className="number">4.3/5</div>
            <div className="label">Gns. rating</div>
          </div>
        </div>
      </StatsSection>
    </PageContainer>
  );
}

export default BankPartners;
