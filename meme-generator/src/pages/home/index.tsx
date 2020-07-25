import React from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

import {
  Container,
  Header,
  Body,
  ImageField,
  ConfigField,
  Footer,
} from './styles'

const Home: React.FC = () => {
  let bg: any = null
  const y: any = 0

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    bg = p5.loadImage('./avatar2.png')
    p5.createCanvas(216, 233)
  }

  const draw = (p5: p5Types) => {
    p5.background(bg)
    p5.stroke(226, 204, 0)
    p5.line(0, y, width, y)

    y++
    if (y > height) {
      y = 0
    }
  }

  return (
    <Container>
      <Header>Meme generator</Header>
      <Body>
        <ImageField>
          <Sketch setup={setup} draw={draw} />
        </ImageField>
        <ConfigField>top text</ConfigField>
      </Body>
      <Footer />
    </Container>
  )
}

export default Home
