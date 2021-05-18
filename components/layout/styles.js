import css from "styled-jsx/css";
import { fonts, colors, breakpoints } from "../../styles/theme";

export const globalStyles = css.global`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0px;
    margin: 0px;
    font-family: ${fonts.base};
    background-image: radial-gradient(${colors.primary} 1px, transparent 1px),
      radial-gradient(${colors.secondary} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }
`;

export default css`
  h1 {
    color: ${colors.secondary};
  }

  main {
    background-color: #fff;
    box-shadow: 0 10px 25px #bfbfbf;
    border-radius: 5px;
    width: 100%;
    height: 85vh;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 85vh;
      width: ${breakpoints.mobile};
    }
  }
`;
