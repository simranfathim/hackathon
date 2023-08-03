import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';



function Home() {
 
    return(
    <div className='h1'><br></br>
      <h1 className='text-9xl'>Welcome to Homepage
       <h3 >“It’s a matter of great pride to be hosting <br></br>
        <br></br>the ICC World Cup 2023 in different cities across India”: Jay Shah
        by CT Contributor</h3>
      </h1>

     <div>
    </div>
    <div className='first'>
      <div className="d-block w-50">
       <Carousel data-bs-theme="dark">
       <Carousel.Item>
        <img
          className="d-block w-70"
          src='https://www.icccricketschedule.com/wp-content/uploads/2023/05/icc-cricket-world-cup-1.jpg'
          alt="First slide"
        />
       </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-60 "
          src='https://hpsc.net.in/wp-content/uploads/2023/05/ICC-WORLD-CUP-2023-SCHEDULE-1.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
        <img 
          className="d-block w-70 "
          src='https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/35/351/351567/preview-image-o.jpg?1423783197' height={'450px'} 
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>World cup</h5>
          <h4>
            ICC MEN Worldcup 2023
          </h4> */}
        </Carousel.Caption>
       </Carousel.Item>
       </Carousel>
       </div>
      <div className='content'>
      <h4>"The ICC Men’s Cricket World Cup 2023, to be hosted by India, will be the 13th edition of the 50-over World Cup. India will be hosting the quadrennial tournament for the fourth time in its history, and the tournament is set to take place in 2023.
        FormatTen teams will contest for the coveted trophy. The tournament will follow a similar format to the 2019 edition in England and Wales, with a round-robin stage followed by the knockouts. 
        All 10 teams will compete against each other once in the round-robin stage. A victory earns the winning side two points in every match, while a no-result will mean the sides share a point each. The top four teams at the end of the round-robin stage will qualify for the semi-finals. The winners of the two subsequent semi-finals will contest in the final, where the champion will be crowned." </h4>

     </div>
     </div>
     <br></br>
     <br></br>
     <br></br>
     <div className='shop'>
       <div className='min' >
         <h3 style={{color:'pink'}}>ICC MEN'S WORLDCUP</h3>
         <h3 style={{color:'pink'}}>India 2023</h3>
         <h4 style={{color:'pink'}}>ICC INDIA STORE</h4>
         <p style={{color:'pink'}}>select your region and shop all<br></br>
         Cricket World cup Merchadise</p>
        </div>
      
        <img src='https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wNy9JQ0NfQ1dDX0hvbWVwYWdlXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjE0NDAsImhlaWdodCI6NDk0fX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==' style={{width:"800px"}}/>
      </div>
      <br></br>
      <br></br>

      {/* foot */}
      <footer class="bg-dark text-center text-white">
  
   <div class="container p-4">
  
    <section class="mb-4">
     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  
    <section class="">
      <form action="">
      
        <div class="row d-flex justify-content-center">
          
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
           
            <div class="form-outline form-white mb-2">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          
          <div class="col-auto">
          
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
         
        </div>
      
      </form>
    </section>
    
    <section class="mb-4"/>
     
    <section class="">
      
      <div class="row">
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://www.cricketworldcup.com/" class="text-white">Cricket world cup</a>
            </li>
            <li>
              <a href="#!" class="text-white">Homepage</a>
            </li>

          </ul>
        </div>
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
         

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">News&vedios</a>
            </li>
            <li>
              <a href="https://www.cricketworldcup.com/news" class="text-white">All News</a>
            </li>
            <li>
              <a href="https://www.cricketworldcup.com/video" class="text-white">Vedio hub</a>
            </li>
            
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">ICC</a>
            </li>
            <li>
              <a href="https://www.icc-cricket.com/homepage" class="text-white">ICC Homepage</a>
            </li>
            <li>
              <a href="https://www.icc-cricket.com/rankings/mens/overview" class="text-white">ICC Rankings</a>
            </li>
            <li>
              <a href="https://www.icc-cricket.com/about" class="text-white">About ICC</a>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">More</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://www.fancode.com/shop/icc?utm_source=icc&utm_medium=banner" class="text-white">Shop</a>
            </li>
            <li>
              <a href="https://www.fancraze.com/icc" class="text-white">Crictos</a>
            </li>
            
          </ul>
        </div>
       
      </div>
     
    </section>
   
   </div>
 
   <div class="text-center p-3" >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">2023 © International Cricket Council FZ LLC</a>
   </div>
  
   </footer>
      
    </div>
     

    
   
  

   
  )
  
}

export default Home
