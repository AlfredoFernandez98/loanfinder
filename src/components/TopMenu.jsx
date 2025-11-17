import { NavLink } from "react-router";
import styled from "styled-components";
import { useState, useContext } from "react"; // Tilføj useContext
import { AuthContext } from "../main"; // Import AuthContext

//Assets
import logo from "../assets/logo.png";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  max-width: var(--max-width-2xl);
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media (max-width: 770px) {
    padding: var(--space-4);
    flex-wrap: wrap;
  }
`;

const StyledMenu = styled.ul.attrs((props) => ({
  "data-is-open": props.isOpen,
}))`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  gap: var(--space-1);
  margin: 0;
  padding: var(--space-4);
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--gray-200);
  z-index: 100;
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 770px) {
    display: flex;
    flex-direction: row;
    gap: var(--space-6);
    width: auto;
    position: static;
    background: none;
    backdrop-filter: none;
    border-radius: 0;
    box-shadow: none;
    border: none;
    padding: 0;
    animation: none;
    align-items: center;
  }

  li {
    width: 100%;
    
    @media (min-width: 770px) {
      width: auto;
    }
    
    a {
      color: var(--gray-700);
      font-size: var(--font-size-base);
      font-weight: 500;
      text-decoration: none;
      padding: var(--space-3) var(--space-4);
      display: block;
      border-radius: var(--radius-md);
      transition: all 0.2s ease-in-out;
      position: relative;
      
      &:hover {
        color: var(--primary-600);
        background: var(--primary-50);
        transform: translateY(-1px);
      }
      
      &.active {
        color: var(--primary-600);
        background: var(--primary-100);
        
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: var(--primary-600);
          border-radius: 1px;
          
          @media (max-width: 770px) {
            display: none;
          }
        }
      }

      &.signup-link {
        background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
        color: white;
        font-weight: 600;
        margin-top: var(--space-2);
        
        &:hover {
          background: linear-gradient(135deg, var(--primary-700), var(--primary-800));
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
      }

      &.login-link {
        border: 2px solid var(--primary-200);
        background: rgba(255, 255, 255, 0.9);
        
        &:hover {
          border-color: var(--primary-400);
          background: var(--primary-50);
        }
      }
      
      @media (min-width: 770px) {
        padding: var(--space-3) var(--space-5);
        font-size: var(--font-size-sm);
        
        &:hover {
          background: transparent;
          transform: none;
        }

        &.signup-link:hover,
        &.login-link:hover {
          transform: translateY(-1px);
        }
      }
    }

    .auth-section {
      border-top: 1px solid var(--gray-200);
      padding-top: var(--space-4);
      margin-top: var(--space-4);

      @media (min-width: 770px) {
        border-top: none;
        padding-top: 0;
        margin-top: 0;
      }
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  z-index: 101;
  
  img {
    height: 3rem;
    width: auto;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.05);
    }
    
    @media (max-width: 770px) {
      height: 2.5rem;
    }
  }
`;

const StyledToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(59, 130, 246, 0.2);
  color: var(--primary-600);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 101;
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: var(--primary-600);
    color: white;
    border-color: var(--primary-600);
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
  }
  
  &:active {
    transform: scale(1.05) rotate(90deg);
    transition: all 0.1s ease;
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  background: var(--error);
  color: white;
  border: none;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #dc2626;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

function TopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Luk dropdown-menuen
  };

  return (
    <StyledNav>
      <StyledLogo>
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
      </StyledLogo>

      <StyledToggleButton onClick={toggleMenu}>☰</StyledToggleButton>

      <StyledMenu isOpen={menuOpen}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            Om os
          </NavLink>
        </li>
        <li>
          <NavLink to="/hvordan" onClick={closeMenu}>
            Sådan virker det
          </NavLink>
        </li>
        <li>
          <NavLink to="/banker" onClick={closeMenu}>
            Partnere
          </NavLink>
        </li>
        <li>
          <NavLink to="/customerservice" onClick={closeMenu}>
            Support
          </NavLink>
        </li>
        {!user ? (
          <>
            <li className="auth-section">
              <NavLink to="/signup" onClick={closeMenu} className="signup-link">
                Opret konto
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={closeMenu} className="login-link">
                Log ind
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <LogoutButton
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
            >
              Log ud
            </LogoutButton>
          </li>
        )}
      </StyledMenu>
    </StyledNav>
  );
}

export default TopMenu;
