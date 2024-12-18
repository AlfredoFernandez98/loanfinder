import { createGlobalStyle } from "styled-components";
import Bg from "../images/background.png";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    
}

html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
/* Define default variables globally */
:root {
 font-size: 16px;
    --text-color-light: black;
    --text-color-dark: white;
    --viewport-width: 100vw; /* Full screen width */
    --viewport-height: 100vh; /* Full screen height */

   
}

/* Adjust variables for small screens */
@media (max-width: 700px) {
    :root {
      font-size: 14px; /* Smaller font size for phones */
        --viewport-width: 100%; /* Allow it to adapt to screen size */
        --viewport-height: auto;
    }
}

/* Wireframe */

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100wh;
    height: 100vh;
    background-image: url(${Bg});
     background-size: cover; /* Ensures the image covers the entire page */
    background-repeat: no-repeat;
    background-position: center; /* Centers the image */
    background-attachment: fixed; /* Keeps the background fixed while scrolling */
    min-height: 100vh; /* Ensures body fills the entire viewport */
}

header {
    padding: 1rem;
    width: 100%;
    max-width: var(--small-device);
    border-bottom: 1px solid silver;
}

main {
    padding: 2rem 0rem;
    width: 100%;
    max-width: var(--small-device);
    min-height: 80vh;

    
}

footer {
    padding: 1rem;
    width: 100%;
    max-width: var(--small-device);
    display: flex;
    justify-content: space-evenly;


}

h1 {
    font-size: 2rem;
    color: var(--text-color-light)
}

h2 {
    font-size: 1.5rem;
}

p { font-size: 1rem;}

`

export default GlobalStyle