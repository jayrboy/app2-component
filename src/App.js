/* eslint-disable */
import { useState } from 'react'
// import { Header, Content, Footer } from './components/func-component'
// import Calendar from './components/class-component'
// import { Button } from './components/class-component'
// import { CalculatorClass, CalculatorFunc } from './components/calculator'
// import { EvenDataClass, EvenDataFunc, Table } from './components/even-data'
// import RefsFunc from './components/state-refs/RefsFunc'
// import RefsArray from './components/state-refs/RefsArray'
// import StateFunc from './components/state-refs/StateFunc'
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
