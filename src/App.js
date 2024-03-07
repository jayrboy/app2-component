/* eslint-disable */
import { useState } from 'react'
import { userContext } from './03-context/context'
import { RouterNavLink } from './04-router/Router'

export default function App() {
  let [user, setUser] = useState('')

  return (
    <userContext.Provider value={[user, setUser]}>
      <RouterNavLink />
    </userContext.Provider>
  )
}
