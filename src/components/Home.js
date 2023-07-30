import React from 'react'
import '../components/Home.css'
import Carousel from 'react-bootstrap/Carousel';



function Home() {
 
    return(
    <div className='h1'><br></br>
      <h1>Welcome to Homepage</h1>
      <h3 >“It’s a matter of great pride to be hosting <br></br>
        <br></br>the ICC World Cup 2023 in different cities across India”: Jay Shah
        by CT Contributor</h3>


    <div>

    </div>
      
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.icccricketschedule.com/wp-content/uploads/2023/05/icc-cricket-world-cup-1.jpg'height={'450px'} width={'250'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://hpsc.net.in/wp-content/uploads/2023/05/ICC-WORLD-CUP-2023-SCHEDULE-1.jpg'height={'450px'} width={'50'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
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
     <hr>
     
     </hr>
    <div className='partners'>
      <h1 >........Partners......</h1>
      <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/ec719b27-9cd2-4636-9085-646f0e07b2cf/mrf-tyres-1.svg'></img>
      <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/7fc22d22-80a0-4d3b-9558-3565c55c7484/booking.com.svg'></img>
      <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/eeee7a2c-e016-4547-9de7-077b6f3dd8b0/byjus.svg'></img>
    <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/746668e1-a2d8-49a5-9fd7-508efdd82598/BharatPe.svg'></img>
    <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/e3a4013c-528f-453a-aed4-c173903ab85a/aramco.svg'></img>
    <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/5e358a3f-5b8d-4e31-901e-4b49a6c2bd9a/cricket4good.svg'></img>
    <img src='https://resources.pulse.icc-cricket.com/ICC/document/2023/07/12/9a95a5a6-0271-4175-a9e4-0cf6f87e0646/starsports.svg'></img>
    
    
    </div>

    
   
    </div>

   
  )
  
}

export default Home
