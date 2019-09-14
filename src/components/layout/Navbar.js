import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="teal" style={{ marginBottom: '40px' }}>
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Holiday
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
