import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='cards'>
    <Link
    className='cards-link'  to={props.path}>
        <figure className='cards-img' data-category={props.label}>
            <img src={props.src}
             alt='Travel Image'
             className='cards-item-img'
             />
        </figure>
        <div className="cards_content">
            <h5 className='cards-info'>{props.text}</h5>
        </div>
    </Link>
    </li>
    </>
  )
}

export default CardItem