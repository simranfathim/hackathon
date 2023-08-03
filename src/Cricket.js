// import Button from 'react-bootstrap/Button';
import './Cricket.css'
// import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import Api from './Api.json'



export default function Cricket() {

    const [data,setdata]=useState(Api)
     console.log(data)


 let [userInput,setUserInput]=useState('')
 let [ddvalue, setDdValue] = useState('')
const [time,setTime]=useState('')
 const filterData = data.filter((val) => {
  return val.home_team.toLowerCase().includes(userInput.toLowerCase())
}) 
const newfilterData = data.filter((val) => {
  return val.home_team.toLowerCase().includes(ddvalue.toLowerCase())
})
useEffect(()=>{
  var countDownDate = new Date("Oct 5, 2023 15:37:25").getTime();


  var x = setInterval(function() {
  
  
    var now = new Date().getTime();
  
    
    var distance = countDownDate - now;
  
   
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
   setTime( days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ")
  
  
    if (distance < 0) {
      clearInterval(x);
      setTime("EXPIRED")
    }
  }, 1000);
})

  return(
    <div className='page'>
       <h1 style={{color:'white'}}>**MEN'S Match FIXTURES**</h1>
      <br></br>
      <div className='count'  >
        <h4>"Get ready for the ultimate cricket extravaganza! 🏏 ICC Cricket World Cup 2023 is just around the corner, and the excitement is building up! 🌟
           Mark your calendars,join us 🌍,So gear up, paint your faces, wave your flags, and cheer for your favorite teams! 🎊
           The countdown has begun! Are you ready to be a part of history? 🕒 ICC Cricket World Cup 2023 awaits! Let the games begin! 🏆🏏🌟"
        </h4>
        <h1 className='head'>{time}</h1>
      </div>
      <br></br>
      <div classname='select'>
       <input type="text" onChange={(e) => setUserInput(e.target.value)} style={{ width: "400px",borderRadius:"10px" }} placeholder='search here' />
       <select onChange={(e) => setDdValue(e.target.value)} style={{ width: "300px",borderRadius:"10px" }}>
       <option value="India">India</option>
       <option value="pakistan">Pakistan</option> 
        <option value="England">England</option>
        <option value="Australia">India</option>
        <option value="Southafrica">Southafrica</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Afghanistan">Afganistan</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Srilanka">Srilanka</option>
        <option value="Newzealand">Newzealand</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
     </div>
     {
      newfilterData.map((data)=>{
        return(
      <div class="card1"  >
     <div class="card-body">
        <h2> Match{data.match_no}</h2>
        <hr></hr>
        <h4 class="card-title"style={{color:'Orange', fontFamily:'Georgia, serif',fontSize:'50px'}}>{data.home_team}</h4>
           VS
        <h4 class="card-title"style={{color:'darkred', fontFamily:'Georgia, serif',fontSize:'50px'}}>{data.away_team}</h4>
        <ul class="list-group list-group-flush">
         <li class="list-group-item"style={{color:'brown'}}>{data.location}</li>
         <li class="list-group-item"style={{color:'Green',fontSize:'30px'}}>{data.date}</li>
        </ul>
      </div>
      
    </div>

        )
        
        
      })
     }
    </div>
  )}

  







