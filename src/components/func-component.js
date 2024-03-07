/* eslint-disable */

export function Header() {
  const aStyle = {
    display: 'inline-block',
    color: 'blue',
    margin: '7px',
    textDecoration: 'none',
  }
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <a href="" style={aStyle}>
        Home
      </a>
      |&nbsp;
      <a href="" style={aStyle}>
        React
      </a>
      |&nbsp;
      <a href="" style={aStyle}>
        React Native
      </a>
    </div>
  )
}

export function Content() {
  return (
    <div style={{ textAlign: 'center', marginTop: '15px' }}>
      <h2>
        Hello
        <br />
        React & React Native
      </h2>
      <br />
      <br />
    </div>
  )
}

export function Footer() {
  return (
    <div style={{ textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} All rights reserved
    </div>
  )
}
