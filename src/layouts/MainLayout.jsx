import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";

import Bg from "../images/background.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BackGround = styled.div`
  background-image: url(${Bg});
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  min-height: 100vh; /* Ensures the background covers the full viewport height */
  display: flex; /* Allows stacking content inside */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <BackGround>
        <Container>
          <header>
            <TopMenu />
          </header>
          <main>
            <Outlet/>
          </main>
          <footer>
            <p>&copy; 2024 LoanFinder</p>
            <p> system v. 0.9</p>
          </footer>
        </Container>
      </BackGround>
    </>
  );
}

export default MainLayout;
