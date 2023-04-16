import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <div className='pnf'>
        <h1 className="pnf-statuscode">404</h1>
        <h1 className="pnf-heading">Oops! Page Not Found</h1>
        <Link to="/" className='pnf-btn'>
            Go Back
        </Link>
      </div>
    </div>
  )
}

export default NotFound
