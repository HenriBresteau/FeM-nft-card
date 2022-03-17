import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --softBlue: hsl(215, 51%, 70%);
    --cyan: hsl(178, 100%, 50%);
    --mainBlue: hsl(217, 54%, 11%);
    --cardBlue: hsl(216, 50%, 16%);
    --lineBlue: hsl(215, 32%, 27%);
    --white: #fff;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --lightWeight: 300;
    --medWeight: 400;
    --bigWeight: 600;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--mainBlue);
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    .App {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
  }
`;
