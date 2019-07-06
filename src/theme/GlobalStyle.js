import { createGlobalStyle } from 'styled-components'

const primaryDark = '#1a1d27'
const secondaryDark = '#2d303d'

const white = '#eae9e1'
const purple = '#af98e6'
const blue = '#51c7da'
const yellow = '#fada5d'
const green = '#83c192'
const pink = '#f29c9f'
const orange = '#ffbd50'

const black = '#1a1d27'
const lightWhite = '#FFFFFF'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  
  body {
    --bg: ${primaryDark};
    --text: ${white};   
    --primary: ${white};  
    --navBg: ${secondaryDark};
    --navText: ${white};
    --semiDark: ${white};
    --codeBg: transparent;
    --shadow: ${black};
    --white: ${lightWhite};

    &.dark {
      --bg: ${primaryDark};
      --text: ${white};
      --primary: ${white};
      --shadow: transparent;
      --codeBg: ${secondaryDark};
    }

    background-color: var(--bg);

    color: var(--text);

    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    transition: background-color 0.3s ease-in-out;
    font-size: 1.2rem;

    text-rendering: optimizeLegibility;
    font-kerning: normal;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
  }

  h1 {
    font-size: 2rem;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--primary);
  }

  #niceToMeetYou{
    color : ${orange};
  }

  #hanyuXu{
    color : ${pink};
  }

  #university{
    color : ${green};
  }

  #job{
    color : ${blue};
    font-weight : bold;
  }

  #aboutMe{
    color : ${pink};
  }

  #projects{
    color : ${green};
  }

  #experience{
    color : ${yellow};
  }

  #things{
    color : ${blue};
  }
  
  #resume{
    color : ${purple};
  }


`

export default GlobalStyle
