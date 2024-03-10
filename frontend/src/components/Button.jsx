import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

function Btn({ text, url }) {
  return (
    <Link to={url} className='btn'>
        {text}
    </Link>
  )
}

export default Btn