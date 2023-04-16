import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <div className='bg-dark text-white text-center p-3'>
            <h4>All Rights Reserved &copy; Shiva Shankar</h4>
            <Link to="/about" className='links'>About</Link> | <Link to="/contact" className='links'>Contact</Link> | <Link to="/policy" className='links'>Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer
