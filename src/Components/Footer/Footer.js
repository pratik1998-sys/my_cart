import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footer app_flex'>
      <div className='footer__container'>
        <div className='footer-logo'>
          <img
            src='https://api-seomaster.giraffly.com/photo/164357755361f700d1ec94b9175.png'
            alt=''
            onClick={() => {
              navigate('/')
            }}
          />
        </div>
        <div className='footer-copyright'>
          <p>@Copyright, 2023{'  '}</p>
          <p> My Cart</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
