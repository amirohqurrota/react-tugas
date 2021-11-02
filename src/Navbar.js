import React from 'react';
import logo from "./image/logo-ALTA.png";


export default function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
          <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link mx-3 active" aria-current="page" href="#">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-3" href="#">ABOUT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-3">EXPERIENCE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-3">CONTACT</a>
                  </li>
                </ul>

          </div>
          
        </div>
      </div>
  </nav>
    )
}