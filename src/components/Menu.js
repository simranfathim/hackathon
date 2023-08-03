import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Menu = () => {
  return (
   <div>
   
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
     <a class="navbar-brand" href="#">
     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/2023_CWC_Logo.svg/1200px-2023_CWC_Logo.svg.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
     </a>
     <a class="navbar-brand" href="#">ICC WORLD CUP</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/Home">Home </a>
      <a class="nav-item nav-link  active" href="/Cricket">MATCHES</a>
      <a class="nav-item nav-link  active" href="https://www.cricketworldcup.com/home-page">PAGE</a>
      <a class="navbar-brand" href="#">
     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/2023_CWC_Logo.svg/1200px-2023_CWC_Logo.svg.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
     </a>
     </div>
    </div>
   </nav>
      
   </div>
  )
}

export default Menu




