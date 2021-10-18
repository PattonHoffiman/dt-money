import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    //* Color variables.

    --shape: #ffffff;
    --background: #f0f2f5;

    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;

    --text-body: #969cb3;
    --text-title: #363f5f;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //* Font Size configuration, based on 16px as default. With this using rem or em is more easely.
  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //? Represents 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //? Represents 14px
    }
  }
    
  body {
    background: var(--background);
    
    //* More detailed fonts
    -webkit-font-smoothing: antialised;
  }

  //* Font family and weight configuration.
  body, input, textarea, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed; 
  }
`;