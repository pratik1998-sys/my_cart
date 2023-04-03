import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home app_flex'>
      <div className='home__container'>
        <div className='home-heading'>
          <h1>
            <span>India's leading online shopping website..</span>
          </h1>
        </div>
        <div className='home-button'>
          <button>
            <Link to='/products'>Shop now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
