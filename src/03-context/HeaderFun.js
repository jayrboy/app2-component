/* eslint-disable */
import { useContext } from 'react'
import { userContext } from './context'

export default function HeaderFun() {
  let [user, setUser] = useContext(userContext)

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
          {user}&nbsp;:&nbsp;
          <a
            className="btn btn-sm btn-outline-danger"
            href=" "
            onClick={onClickSignout}
          >
            Signout
          </a>
        </span>
      ) : (
        <span>
          <a
            className="btn btn-sm btn-outline-primary"
            href=" "
            onClick={onClickSignin}
          >
            Signin
          </a>
        </span>
      )}
    </div>
  )
}
