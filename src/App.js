import { Header, Content, Footer } from './components/func-component'
import Calendar from './components/class-component'

function App() {
  return (
    <>
      <Header />
      <p>
        <center>
          <Calendar />
        </center>
      </p>
      <Content />
      <Footer />
    </>
  )
}

export default App
