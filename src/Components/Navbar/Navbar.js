import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar app_flex'>
      <div className='navbar__container'>
        <div className='navbar-logo'>
          <img
            src='https://api-seomaster.giraffly.com/photo/164357755361f700d1ec94b9175.png'
            alt=''
            onClick={() => {
              navigate('/')
            }}
          />
        </div>
        <div className='navbar-content'>
          <ul>
            <li>
              <Link to='/'>
                <h4>Home</h4>
              </Link>
            </li>
            <li>
              <Link to='/products'>
                <h4>Products</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
