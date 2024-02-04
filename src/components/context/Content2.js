/* eslint-disable */
import { useContext } from 'react'
import { userContext } from './context'

export default function Content2() {
  let [user, setUser] = useContext(userContext)

  const contentStyle = {
    backgroundColor: '#ddd',
    textAlign: 'center',
    margin: 10,
    padding: 10,
  }

  const onClickSignin = (event) => {
    event.preventDefault()
    setUser('Jay Jakkrit')
  }

  return (
    <div style={contentStyle}>
      {user ? (
        <span>Hello {user}</span>
      ) : (
        <span>
          Please{' '}
          <a href="#" onClick={onClickSignin}>
            Signin
          </a>
        </span>
      )}
    </div>
  )
}
