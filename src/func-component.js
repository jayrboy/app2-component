/* eslint-disable */
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink to="#" className="navbar-brand">
          <img src="./logo192.png" width="28px" alt="" />
          <span className="nav-brand text-info"> React</span>
        </NavLink>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          labelled="offcanvasDarkNavbarLabel"
          style={{ width: '220px' }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              React
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li>
                <NavLink className="nav-link fw-bold active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/products">
                  React
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/react-native">
                  React Native
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
