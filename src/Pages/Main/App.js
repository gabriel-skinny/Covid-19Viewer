import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

import axios from "axios"


import { Header, Container, Button, Loading, Error } from "./styles"

function App() {
  const [response, setResponse] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState("")
 

  const history = useHistory()
  
  function handleSubmit(data){
    history.push("/country", {data: data.name})
    }
  
  useEffect(() => {
    async function getApi(){
        const { data } = await axios.get("https://covid19.mathdro.id/api/countries")
              setResponse(data.countries)
            }
    getApi()
  }, [])
 
  
  useEffect(() => {
    setFilter(response.filter((data) => data.name.toLowerCase().indexOf(inputValue) !== -1))
  }, [inputValue, response])
  
  if(response.length === 0) return <Loading>Carregando ...</Loading>
  
  return (
   <>
    <Header>
      <h1>Coronavirus Viewer</h1>

      <input type="text" placeholder="search for countries" 
      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
    </Header>
    <Container>
      {filter.length === 0 && <Error><h1>No such country with this name</h1></Error>}
      
      {filter.map(data =>(
          <Button onClick={() => handleSubmit(data)} className={`${data.name}`}>
          <h1>{data.name}</h1>
           </Button>
         ))}
    
    </Container>
  </>
  );
}

export default App;
