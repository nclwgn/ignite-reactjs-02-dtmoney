import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { // Default: 16 px
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`