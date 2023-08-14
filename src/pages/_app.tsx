import { AppProps } from "next/app"
import { GlobalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
