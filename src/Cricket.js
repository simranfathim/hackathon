import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import Api from './Api.json'
import '../src/Cricket.css'


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
    <div>
      <br></br>
      <div className='count' style={{width:'400px'}}>
        <h1 >{time}</h1>
      </div>
      <br></br>
       <input type="text" onChange={(e) => setUserInput(e.target.value)} style={{ width: "400px", }} placeholder='search here' />
       <select onChange={(e) => setDdValue(e.target.value)}>
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
        
     {
      newfilterData && filterData.map((data)=>{
        return(
          <Card className='ver'>
        <Card.Header style={{color:'black', }}> Match{data.match_no}</Card.Header>
       <Card.Body>
          <Card.Title style={{color:'Orange', fontFamily:'Georgia, serif',fontSize:'50px'}}>{data.home_team}</Card.Title>
              <h1>vs</h1>
          <Card.Text style={{color:'darkred', fontFamily:'Georgia, serif',fontSize:'50px'}}>{data.away_team}</Card.Text>
          <Card.Title style={{color:'brown',backgroundColor:'white smoke'}}>{data.location}</Card.Title>
          <Card.Title style={{color:'Green'}}>{data.date}</Card.Title>
          
        </Card.Body>
      </Card>
        )
        
        
      })
     }
    </div>
  )}

  







