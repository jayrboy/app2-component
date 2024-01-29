/* eslint-disable */
import React from 'react'
import { userContext } from './context'

export default function Header() {
  let [user, setUser] = React.useContext(userContext)

  const headerStyle = {
    backgroundColor: '#cee',
    textAlign: 'center',
    padding: 5,
  }

  const onClickSignout = (event) => {
    event.preventDefault()
    setUser('')
  }

  const onClickSignin = (event) => {
    event.preventDefault()
    setUser('Jay Jakkrit')
  }

  return (
    <div style={headerStyle}>
      <a href="#">Home</a> &nbsp;-&nbsp;
      <a href="#">Product</a> &nbsp;-&nbsp;
      <a href="#">Content</a> &nbsp;
      {user ? (
        <span>
          [{user}&nbsp;:&nbsp;{' '}
          <a href=" " onClick={onClickSignout}>
            Signout
          </a>{' '}
          ]
        </span>
      ) : (
        <span>
          [{' '}
          <a href=" " onClick={onClickSignin}>
            Signin
          </a>{' '}
          ]
        </span>
      )}
    </div>
  )
}
