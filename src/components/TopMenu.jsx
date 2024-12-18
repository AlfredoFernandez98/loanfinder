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
  padding: 0 20px;
  flex-wrap: wrap;


  @media (max-width: 770px) {
    flex-direction:wrap; /* Stak elementerne vertikalt */

    align-items: center; /* Placer alt i starten */
  }
  
`;

const StyledMenu = styled.ul.attrs((props) => ({
  "data-is-open": props.isOpen, // Brug data-attribut i stedet for isOpen
}))`
display: ${(props) => (props.isOpen ? "flex" : "none")}; /* Toggle menu visibility */
  flex-direction: column; /* Vertikal stack for små skærme */
  list-style: none;
  gap: 0.5rem; /* Mindre mellemrum */
  margin: 0;
  padding: 0;
  width: 100%; /* Fylder hele bredden */
  text-align: center; /* Centrér teksten */

  @media (min-width: 770px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: auto; /* Automatisk bredde på store skærme */
  }

  li {
    width: 100%; /* Fylder hele bredden på små skærme */
    a {
      color: #4e8bf4;
      font-size: 1.2rem; /* Mindre tekststørrelse */
      text-decoration: none;
      padding: 0.5rem 0;
      display: block; /* Gør links nemme at klikke på */
    }
  }
`;


const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px; /* Add some margin if needed */
  img {
    height: 4rem; /* Adjust size to fit the layout */
    max-width: 100%; /* Ensure the image doesn't overflow */
    
  }
`;
const StyledToggleButton = styled.button`
   background: none;
  border: none;
  color: #4e8bf4;
  font-size: 2rem; /* Gør ikonet mere synligt */
  cursor: pointer;
  margin: 0;
  padding: 0;

  @media (min-width: 770px) {
    display: none; /* Skjul knappen på store skærme */
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            LoanFinder
          </NavLink>
        </li>
        <li>
          <NavLink to="/customerservice" onClick={closeMenu}>
            Kunderservice
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink to="/login" onClick={closeMenu}>
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/" onClick={() => {
              handleLogout();
              closeMenu();
            }} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#4e8bf4",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                Logud
              </button>
            </NavLink>
          </li>
        )}
      </StyledMenu>
    </StyledNav>
  );
}

export default TopMenu;
