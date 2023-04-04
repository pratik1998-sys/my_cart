import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './stars.scss'
const Stars = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return <div className='stars'>{tempStars}</div>
}

export default Stars
