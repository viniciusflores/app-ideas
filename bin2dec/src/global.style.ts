import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  body {
    background: #000;
    color: #FFF;
  }

  border, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
`
