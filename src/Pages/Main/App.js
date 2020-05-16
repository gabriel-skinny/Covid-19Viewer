import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

import axios from "axios"
import $ from "jquery"

import { Header, Container, Button } from "./styles"

function App() {
  const [response, setResponse] = useState([])
 

  const history = useHistory()
  
  function handleSubmit(data){
    history.push("/country", {data: data.name})
    }
  
  function inputChange(e){
    const text = e.target.value

    response.map(data =>{
     if(data.name.indexOf(text) === -1){
      const country = data.name.split(" ").shift().split(",").shift().split("*").shift()
      $(`.${country}`).css("display", "none")
     }
      },

      
  )}
    
    
  
  useEffect(() => {
    async function getApi(){
        await axios.get("https://covid19.mathdro.id/api/countries")
          .then(function(data){
              setResponse(data.data.countries)
              const teste = data.data.countries
          })
          
  }
    getApi()
  }, [])
 
  return (
   <>
    <Header>
      <h1>Coronavirus Viewer</h1>

      <input type="text" placeholder="search for countries" onChange={(e) => inputChange(e)}/>
    </Header>
    <Container>
      {response.map(data =>(
          <Button onClick={() => handleSubmit(data)} className={`${data.name}`}>
          <h1>{data.name}</h1>
           </Button>
         ))}
    </Container>
  </>
  );
}

export default App;
