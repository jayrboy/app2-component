import { Header, Content, Footer } from './func-component'
import Calendar from './class-component'

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
