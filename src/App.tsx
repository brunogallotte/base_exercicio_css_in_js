import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import { EstiloGlobal, Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </EstiloGlobal>
    </>
  )
}

export default App
