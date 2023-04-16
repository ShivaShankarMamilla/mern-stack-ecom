import React from 'react'
import { NavLink,Link} from 'react-router-dom'
import {GiShoppingBag} from "react-icons/gi"
import { useAuth } from '../context/authContext'
import { toast } from 'react-toastify'

const Header = () => {
  const [auth,setAuth] = useAuth()

  const handleLogout = () =>{
    setAuth({...auth,user:null,token:''})//first we are removing from state so that we dont need page refresh to see localstorage changes
    localStorage.removeItem("auth")
    toast.success("Logout Successful")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand"><GiShoppingBag style={{fontSize:"25px", padding:"2px",marginBottom:"3px"}}/>E COMMERCE APP</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Category</NavLink>
        </li>

        {
          !auth.user?(
            <>
              <li className="nav-item">
                  <NavLink to="/register" className="nav-link">SignUp</NavLink>
              </li>
              <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            </>
          ):(
            <>
            <li className="nav-item">
                    <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
              </li>
            </>
          )
        }

        
        <li className="nav-item">
            <NavLink to="/cart" className="nav-link">Cart(0)</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header