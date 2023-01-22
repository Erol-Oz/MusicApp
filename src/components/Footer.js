import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   
    <footer className="py-3 container">
    <ul className="nav justify-content-center border-bottom pb-3 ">
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/signup">Sign Up</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/login">Login</Link></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Contact</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 Melodia, Inc</p>
  </footer>

    
  )
}

export default Footer
