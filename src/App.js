/* eslint-disable */
import { useState } from 'react'
// import { Header, Content, Footer } from './components/func-component'
// import Calendar from './components/class-component'
// import { Button } from './components/class-component'
// import { EvenData, EvenData2, Table } from './components/EvenData'
// import RefsFunc from './components/RefsFunc'
// import RefsArray from './components/RefsArray'
// import StateFunc from './components/StateFunc'
import { userContext } from './components/context/context'
import HeaderFun from './components/context/HeaderFun'
import Content2 from './components/context/Content2'

export default function App() {
  let [user, setUser] = useState('')

  return (
    <userContext.Provider value={[user, setUser]}>
      <HeaderFun />
      <Content2 />
    </userContext.Provider>
  )
}
