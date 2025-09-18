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
  background: var(--gray-50);
  border-top: 1px solid var(--gray-200);
  padding: var(--space-8) var(--space-4);
  margin-top: auto;
  
  .footer-content {
    max-width: var(--max-width-xl);
    margin: 0 auto;
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
  
  .footer-info {
    display: flex;
    gap: var(--space-6);
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: var(--space-2);
    }
  }
  
  .copyright {
    font-size: var(--font-size-sm);
    color: var(--gray-500);
    font-weight: 500;
  }
  
  .version {
    font-size: var(--font-size-xs);
    color: var(--gray-400);
    background: var(--gray-100);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-md);
    border: 1px solid var(--gray-200);
  }
  
  .footer-links {
    display: flex;
    gap: var(--space-6);
    
    @media (max-width: 768px) {
      gap: var(--space-4);
    }
    
    a {
      font-size: var(--font-size-sm);
      color: var(--gray-600);
      text-decoration: none;
      transition: color 0.2s ease-in-out;
      
      &:hover {
        color: var(--primary-600);
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
            <div className="footer-info">
              <span className="copyright">&copy; 2024 LoanFinder</span>
              <span className="version">System v. 0.9</span>
            </div>
            <div className="footer-links">
              <a href="/about">Om os</a>
              <a href="/customerservice">Support</a>
              <a href="#">Privatlivspolitik</a>
            </div>
          </div>
        </StyledFooter>
      </Container>
    </>
  );
}

export default MainLayout;
