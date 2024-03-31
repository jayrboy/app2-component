import { Link, NavLink, Routes, Route } from 'react-router-dom'
import './navlink.css'
import Home from './Home'
import Navigate from './Navigate'
import Product from './Product'
import Form from './Form'
import CheckBox from '../06-checkbox/CheckBox'
import RestApi from '../08-rest-api/RestApi'

import MongoDB from '../09-mongoose-api/MongoDB'
import DBCreate from '../09-mongoose-api/db-create'
import DBRead from '../09-mongoose-api/db-read'
import DBUpdate from '../09-mongoose-api/db-update'
import DBDelete from '../09-mongoose-api/db-delete'
import DBPaginate from '../09-mongoose-api/db-paginate'

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
  )
}

const RouterNavLink = () => {
  return (
    <>
      <nav className="nav">
        <img src="./logo192.png" width="28px" alt="" />
        <span className="text-info">React</span>
        &nbsp; &nbsp; &nbsp;
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
          to="/form"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          Form
        </NavLink>
        -&nbsp;
        <NavLink
          to="/checkbox"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          CheckBox
        </NavLink>
        <NavLink
          to="/rest-api"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          REST API
        </NavLink>
        <NavLink
          to="/db"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
        >
          Database
        </NavLink>
      </nav>
      {/* ----------------------- */}
      <div className="content">
        <Routes style={{ margin: '20px' }}>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/form" element={<Form />} />
          <Route path="/checkbox" element={<CheckBox />} />
          <Route path="/rest-api" element={<RestApi />} />
          <Route path="/db" element={<MongoDB />} />
          <Route path="/db/create" element={<DBCreate />} />
          <Route path="/db/read" element={<DBRead />} />
          <Route path="/db/update" element={<DBUpdate />} />
          <Route path="/db/delete" element={<DBDelete />} />
          <Route path="/db/paginate" element={<DBPaginate />} />
        </Routes>
      </div>
    </>
  )
}
export { RouterLink, RouterNavLink }
