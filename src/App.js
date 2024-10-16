import { useState } from "react";

import axios from "axios";


function App()
 {
    const [city,setcity]=useState("")

      const[weather,setweather]=useState("")
      const[temperature,settemperature]=useState("")
      const[description,setdescription]=useState("")
    
      function handle(event)
      {
         setcity(event.target.value)
      }

   

    function getweather()
    {
      var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce9d20e1384e3b8121fd2860d2d68130`)

      weatherdata.then(function(success){console.log(success.data)
           setweather(success.data.weather[0].main)
           setdescription(success.data.weather[0].description)
           settemperature(success.data.main.temp)
           
      })

      .catch(function(){console.log("enter city")
        
      })
      
      
    }


  return (<div className="bg-black p-20" >

    <div className="bg-green-500 p-10  rounded-md ">
      <h1 className="text-2xl font-medium">Weather Report</h1>
      <p> I can give you a Weather report about your city !</p>
      <input value={city} onChange={handle} className="border border-black rounded-md outline-none p-1 mt-2" placeholder="Enter your City Name" ></input><br/>
      <button onClick={getweather} className="bg-black text-white  rounded-md p-1 mt-2 ">Get Report</button>

      <div className="mt-2 text-1xl font-medium">
        <h2>Weather: <p className="text-white inline">{weather}</p></h2>
        <h2>Temperature: <p className="text-white inline">{temperature}</p></h2>
        <h2>Description: <p className="text-white inline">{description}</p></h2>
      </div>

    </div>

  </div>)
}

export default App;
