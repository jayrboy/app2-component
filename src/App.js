/* eslint-disable */
// import { Header, Content, Footer } from './components/func-component'
// import Calendar from './components/class-component'
// import { Button } from './components/class-component'
// import { EvenData, EvenData2, Table } from './components/EvenData'
// import RefsFunc from './components/RefsFunc'
// import RefsArray from './components/RefsArray'
// import StateFunc from './components/StateFunc'
import { userContext } from './components/context/context'
import Content from './components/context/Content'

export default function App() {
  return (
    <userContext.Provider value={'Jay Jakkrit'}>
      <Content />
    </userContext.Provider>
  )
}
