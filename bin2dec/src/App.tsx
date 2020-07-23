import React, { useState, useCallback } from 'react'
import GlobalStyle from './global.style'
import {
  Container,
  Content,
  InputField,
  InputResult,
  Footer,
} from './app.style'

const App: React.FC = () => {
  const [numberExist, setNumberExist] = useState(false)
  const [validBinary, setValidBinary] = useState(false)
  const [converted, setConverted] = useState('')

  const handleInputField = useCallback(e => {
    const myNumber: string = e.target.value
    let incorrect = false

    myNumber !== '' ? setNumberExist(true) : setNumberExist(false)

    myNumber.split('').forEach(element => {
      if (element !== '0' && element !== '1') {
        incorrect = true
      }
    })
    setValidBinary(!incorrect)

    setConverted(String(parseInt(myNumber, 2)))
  }, [])

  return (
    <>
      <Container>
        <Content>
          <h1>Bin2Dec</h1>
          <p>Enter a binary number and get your decimal conversion.</p>
          {numberExist && validBinary ? (
            <p className="pSuccess">Here is your decimal!</p>
          ) : null}
          {numberExist && !validBinary ? (
            <p className="pError">
              You entered a non-binary digit (please enter only 0 or 1).
            </p>
          ) : null}

          <InputField onChange={handleInputField} maxLength={8} />
          {numberExist && validBinary ? (
            <InputResult>{converted}</InputResult>
          ) : null}
          {numberExist && !validBinary ? (
            <p className="pWait"> Waiting for a valid binary number...</p>
          ) : null}
        </Content>
        <Footer>
          Powered by:
          <a href="https://www.linkedin.com/in/viniciusflores379/">
            Vinicius Flores
          </a>
        </Footer>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
