import styled from 'styled-components'

export const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: stretch;
  max-width: 100%;
`

export const Content = styled.div`
  display: flex;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;

  h1 {
    display: inline-block;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5rem;
  }

  p {
    margin: 1.5rem 0;
  }

  .pError {
    color: rgb(231, 76, 60);
    font-weight: bold;
    margin: 0;
  }

  .pSuccess {
    color: rgb(39, 174, 96);
    font-weight: bold;
    margin: 0;
  }

  .pWait {
    font-size: 0.85rem;
    color: #999;
    font-size: 0.85rem;
    color: #999;
    margin: 2rem 0;

    font-weight: 700;
  }
`

export const InputField = styled.input`
  padding: 0.75rem 1rem;
  font-size: 2rem;
  background: none;
  color: #fff;
  margin: 1rem 0;
`

export const InputResult = styled.p`
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
`

export const Footer = styled.footer`
  flex-direction: row;
  bottom: 0;
  position: fixed;
  width: 100%;
  margin: auto;
  width: 400px;
  text-align: center;
  padding: 10px;
  color: #fff;

  a {
    margin-left: 0.2rem;
    text-decoration: none;
    color: #fff;
  }
`
