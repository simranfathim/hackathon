import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"purple",color:"white"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"style={{ Color: 'white'}} >
            <li className="nav-item active" style={{ Color: 'white'}}>
              <a className="nav-link " style={{ Color: 'white'}}  href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cricket">
                Matches
              </a>
            </li>
            <li className="nav-item"style={{ Color: 'white'}}>
              <a className="nav-link" href="https://www.cricketworldcup.com/?_gl=1*13f7g1d*_ga*MTM4ODE5MTU2MC4xNjkwNjI2Nzkw*_ga_SB8SBQVNVM*MTY5MDY5MzI1NC43LjAuMTY5MDY5MzI1NC42MC4wLjA.">
                Page
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Menu




