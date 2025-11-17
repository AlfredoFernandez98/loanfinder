import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const StyledFooter = styled.footer`
  background: var(--gray-900);
  color: white;
  margin-top: auto;
  
  .footer-content {
    max-width: var(--max-width-xl);
    margin: 0 auto;
    padding: var(--space-16) var(--space-4) var(--space-8);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-8);
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: var(--space-6);
      text-align: center;
    }
  }
  
  .footer-section {
    h4 {
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: white;
      margin-bottom: var(--space-4);
    }
    
    p {
      color: var(--gray-300);
      font-size: var(--font-size-sm);
      line-height: 1.6;
      margin-bottom: var(--space-4);
    }
    
    a {
      display: block;
      color: var(--gray-300);
      text-decoration: none;
      font-size: var(--font-size-sm);
      padding: var(--space-1) 0;
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--primary-400);
      }
    }
    
    .social-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      
      @media (max-width: 768px) {
        align-items: center;
      }
      
      span {
        font-size: var(--font-size-sm);
        color: var(--gray-300);
      }
    }
    
    .trust-indicators {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      
      @media (max-width: 768px) {
        align-items: center;
      }
      
      .trust-badge {
        font-size: var(--font-size-xs);
        padding: var(--space-1) var(--space-2);
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: var(--radius-md);
        color: var(--primary-300);
        width: fit-content;
      }
    }
  }
  
  .footer-bottom {
    max-width: var(--max-width-xl);
    margin: 0 auto;
    padding: var(--space-6) var(--space-4);
    border-top: 1px solid var(--gray-700);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  
  .footer-legal {
    display: flex;
    gap: var(--space-4);
    align-items: center;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    span {
      font-size: var(--font-size-xs);
      color: var(--gray-400);
    }
  }
  
  .footer-legal-links {
    display: flex;
    gap: var(--space-4);
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    a {
      font-size: var(--font-size-xs);
      color: var(--gray-400);
      text-decoration: none;
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--primary-400);
      }
    }
  }
`;

function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <header>
          <TopMenu />
        </header>
        <main>
          <Outlet/>
        </main>
        <StyledFooter>
          <div className="footer-content">
            <div className="footer-section">
              <h4>LoanFinder</h4>
              <p>Danmarks førende lånesammenligningstjeneste siden 2018.</p>
              <div className="social-links">
                <span>📧 support@loanfinder.dk</span>
                <span>📞 +45 70 20 30 40</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <a href="/about">Om LoanFinder</a>
              <a href="/banker">Bank partnere</a>
              <a href="/hvordan">Sådan virker det</a>
              <a href="/customerservice">Kundeservice</a>
            </div>
            
            <div className="footer-section">
              <h4>Lån typer</h4>
              <a href="#">Boliglån</a>
              <a href="#">Forbrugslån</a>
              <a href="#">Billån</a>
              <a href="#">Erhvervslån</a>
            </div>
            
            <div className="footer-section">
              <h4>Sikkerhed</h4>
              <div className="trust-indicators">
                <span className="trust-badge">🔒 SSL Sikret</span>
                <span className="trust-badge">🛡️ GDPR</span>
                <span className="trust-badge">🏛️ FSA Licens</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <span>&copy; 2024 LoanFinder A/S</span>
              <span>CVR: 39847291</span>
              <span>System v. 1.2.0</span>
            </div>
            <div className="footer-legal-links">
              <a href="#">Privatlivspolitik</a>
              <a href="#">Cookies</a>
              <a href="#">Vilkår & betingelser</a>
            </div>
          </div>
        </StyledFooter>
      </Container>
    </>
  );
}

export default MainLayout;
