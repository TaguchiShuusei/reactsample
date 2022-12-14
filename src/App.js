// App.js

import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';


function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(
    {
      country: "",
      cityName: "",
      temerature: "",
      conditionText: "",
      icon: ""
    }
  );

  function getWeather(e) {
      e.preventDefault();
      axios.get(`https://api.weatherapi.com/v1/current.json?key=384848cd439b47e59c382739220210&q=${city}&aqi=no`)
      .then(res => {
        setResults(
          {
            country: res.data.location.country, 
            cityName: res.data.location.name,
            conditionText: res.data.current.temp_c,
            icon: res.data.current.condition.icon
          }
        )
      })
  }
  
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results}/>
    </div>
  );
}

export default App;
