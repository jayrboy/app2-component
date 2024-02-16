import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import './navlink.css'
import Home from './Home'
import Product from './Product'
import Member from './Member'
import Contact from './Contact'
import Navigate from './Navigate'

const RouterLink = () => {
  const navStyle = {
    backgroundColor: '#ced',
    padding: '7px',
    textAlign: 'center',
  }

  const linkStyle = {
    display: 'inline-block',
    color: 'blue',
    TextDecoder: 'none',
  }
  return (
    <BrowserRouter>
      <nav className={navStyle}>
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        -&nbsp;
        <Link to="/product" className={linkStyle}>
          Product
        </Link>
        -&nbsp;
        <Link to="/member" className={linkStyle}>
          Member
        </Link>
        -&nbsp;
        <Link to="/contact" className={linkStyle}>
          Contact Us
        </Link>
      </nav>
    </BrowserRouter>
  )
}

const RouterNavLink = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
          style={({ isActive }) => {
            return { fontWeight: isActive ? 'bold' : '' }
          }}
        >
          Home
        </NavLink>
        -&nbsp;
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          Products
        </NavLink>
        -&nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          Member
        </NavLink>
        -&nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          Contact Us
        </NavLink>
      </nav>
      {/* ----------------------- */}
      <div className="content">
        <Routes style={{ margin: '20px' }}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export { RouterLink, RouterNavLink }
