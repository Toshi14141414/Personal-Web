import { createGlobalStyle } from "styled-components";

const primaryDark = "#1a1d27";
const secondaryDark = "#2d303d";

const white = "#eae9e1";
const purple = "#af98e6";
const blue = "#51c7da";
const yellow = "#fada5d";
const green = "#83c192";
const pink = "#f29c9f";
const orange = "#ffbd50";

const black = "#1a1d27";
const lightWhite = "#FFFFFF";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
  @import './Style/Navigator.scss';
  
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

    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.2rem;

    text-rendering: optimizeLegibility;
    font-kerning: normal;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1, h2, h3, h4, h5 {
    font-family: sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--primary);
  }

  #hello{
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

  #blog{
    color : ${yellow};
  }

  #things{
    color : ${blue};
  }

  #resume{
    color : ${purple};
  }
 

  #toolbox{
    color : ${orange};
  }

  .c-toolbox-list {
    list-style: none;
    margin: 2em 0 0;
    padding: 0;
    overflow: hidden;
  }
  
  .c-toolbox-list__btn1 {
    background: ${primaryDark};
    border: 2px solid ${pink};
    border-radius: .5em;
    color: ${pink};
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    float: left;
    margin: .4em .8em .4em 0;
    padding: .8em 1.15em .75em;
    position: relative;
    transition: all .3s;
  
    &:hover {
      background: ${pink};
      color: ${primaryDark};
    }
  }　

  .c-toolbox-list__btn--is-active1 {
    background: ${pink};
    border-radius: .5em;
    color: ${primaryDark};
    cursor: default;
    z-index: 1;

  }

  .c-toolbox-popover1 {
    background: ${primaryDark};
    border: 2px solid ${pink};
    color: ${pink}; 
    margin: 1px, 0px;
    max-width: 25em;
    padding: .8em 1em .9em;
    position: absolute;
    transition: all .3s;
    
  }
  
  .c-toolbox-popover__text1 {
    line-height: 1.4em;
  
    a {
      background: ${secondaryDark};
      border: none;
      text-decoration: underline;
      color: ${pink};
      display: inline-block;
      font-weight: bold;
      padding: .05em .3em;
      
  
      &:hover {
        background: darken(${primaryDark}, 20%);
      }
    }
  }

  .c-toolbox-list__btn2 {
    background: ${primaryDark};
    border: 2px solid ${green};
    border-radius: .5em;
    color: ${green};
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    float: left;
    margin: .4em .8em .4em 0;
    padding: .8em 1.15em .75em;
    position: relative;
    transition: all .3s;
  
    &:hover {
      background: ${green};
      color: ${primaryDark};
    }
  }　

  
  .c-toolbox-list__btn--is-active2 {
    background: ${green};
    border-radius: .5em;
    color: ${primaryDark};
    cursor: default;
    z-index: 1;
  }

  .c-toolbox-popover2 {
    background: ${primaryDark};
    border: 2px solid ${green};
    color: ${green}; 
    margin: 1px, 0px;
    max-width: 25em;
    padding: .8em 1em .9em;
    position: absolute;
    transition: all .3s;
    
  }
  
  .c-toolbox-popover__text2 {
    line-height: 1.4em;
  
    a {
      background: ${secondaryDark};
      border: none;
      text-decoration: underline;
      color: ${green};
      display: inline-block;
      font-weight: bold;
      padding: .05em .3em;
  
      &:hover {
        background: darken(${primaryDark}, 20%);
      }
    }
  }

  .c-toolbox-list__btn3 {
    background: ${primaryDark};
    border: 2px solid ${yellow};
    border-radius: .5em;
    color: ${yellow};
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    float: left;
    margin: .4em .8em .4em 0;
    padding: .8em 1.15em .75em;
    position: relative;
    transition: all .3s;
  
    &:hover {
      background: ${yellow};
      color: ${primaryDark};
    }
  }　

  
  .c-toolbox-list__btn--is-active3 {
    background: ${yellow};
    border-radius: .5em;
    color: ${primaryDark};
    cursor: default;
    z-index: 1;

  }

  .c-toolbox-popover3 {
    background: ${primaryDark};
    border: 2px solid ${yellow};
    color: ${yellow}; 
    margin: 1px, 0px;
    max-width: 25em;
    padding: .8em 1em .9em;
    position: absolute;
    transition: all .3s;
    
  }
  
  .c-toolbox-popover__text3 {
    line-height: 1.4em;
  
    a {
      background: ${secondaryDark};
      border: none;
      text-decoration: underline;
      color: ${yellow};
      display: inline-block;
      font-weight: bold;
      padding: .05em .3em;
  
      &:hover {
        background: darken(${primaryDark}, 20%);
      }
    }
  }

  .c-toolbox-list__btn4 {
    background: ${primaryDark};
    border: 2px solid ${blue};
    border-radius: .5em;
    color: ${blue};
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    float: left;
    margin: .4em .8em .4em 0;
    padding: .8em 1.15em .75em;
    position: relative;
    transition: all .3s;
  
    &:hover {
      background: ${blue};
      color: ${primaryDark};
    }
  }　

  
  .c-toolbox-list__btn--is-active4 {
    background: ${blue};
    border-radius: .5em;
    color: ${primaryDark};
    cursor: default;
    z-index: 1;

  }

  .c-toolbox-popover4 {
    background: ${primaryDark};
    border: 2px solid ${blue};
    color: ${blue}; 
    margin: 1px, 0px;
    max-width: 25em;
    padding: .8em 1em .9em;
    position: absolute;
    transition: all .3s;
    
  }
  
  .c-toolbox-popover__text4 {
    line-height: 1.4em;
  
    a {
      background: ${secondaryDark};
      border: none;
      text-decoration: underline;
      color: ${blue};
      display: inline-block;
      font-weight: bold;
      padding: .05em .3em;
  
      &:hover {
        background: darken(${primaryDark}, 20%);
      }
    }
  }

  .c-toolbox-list__btn0 {
    background: ${primaryDark};
    border: 2px solid ${purple};
    border-radius: .5em;
    color: ${purple};
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    float: left;
    margin: .4em .8em .4em 0;
    padding: .8em 1.15em .75em;
    position: relative;
    transition: all .3s;
  
    &:hover {
      background: ${purple};
      color: ${primaryDark};
    }
  }　

  
  .c-toolbox-list__btn--is-active0 {
    background: ${purple};
    border-radius: .5em;
    color: ${primaryDark};
    cursor: default;
    z-index: 1;
  }

  .c-toolbox-popover0 {
    background: ${primaryDark};
    border: 2px solid ${purple};
    color: ${purple}; 
    margin: 1px, 0px;
    max-width: 25em;
    padding: .8em 1em .9em;
    position: absolute;
    transition: all .3s;
    
  }
  
  .c-toolbox-popover__text0 {
    line-height: 1.4em;
  
    a {
      background: ${secondaryDark};
      border: none;
      text-decoration: underline;
      color: ${purple};
      display: inline-block;
      font-weight: bold;
      padding: .05em .3em;
  
      &:hover {
        background: darken(${primaryDark}, 20%);
      }
    }
  }
  
  .c-toolbox-popover__description {
    margin: 0;
  }
  
  .c-toolbox-popover__footer {
    margin-top: 1em;
    line-height: 1.3em;
    position: relative;
  }
  
  .c-toolbox-popover__comment {
    display: inline-block;
    font-family: sans-serif;
    font-weight: normal;
    margin-left: 0px;
    b {
      font-weight: 800;
    }
  }
  
  .c-toolbox-popover__close {
    background: none;
    border: none;
    color: ${pink};
    cursor: pointer;
    float: right;
    padding: .5em;
    margin: -.5em -.7em .2em .2em;
  
    &:hover {
      color: darken(${pink}, 20%);
    }
  
    svg {
      font-size: 1.5em;
      padding: 0;
    }
  } 

@media screen and (min-width: $media-width-XL) {
  .c-content-box {    
    max-width: 46rem;
    margin: 0 auto;
  }   
} 

.skill-detail a{
  color: #51c7da;
}

.resume-detail-subtitle a{
  color: #83c192;
  text-decoration: underline;
  font-size: 1.25rem;
}

.resume-text-detail a{
  color: #fada5d;
}
`;

export default GlobalStyle;
