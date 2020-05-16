import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"


import axios from "axios"

import { Container, Text } from "./styles"

export default function Country(){
    const [confirmed, setConfirmed] = useState()
    const [recovered, setRecovered] = useState()
    const [deaths, setDeaths] = useState()
    const [update, setUpdate] = useState()
    
    



    const location = useLocation()
    const myparam = location.state.data

    useEffect(() => {
        async function countryGet(){
            await axios.get(`https://covid19.mathdro.id/api/countries/${myparam}`)
                .then(function(data){
                    
                    setConfirmed(data.data.confirmed.value)
                    setRecovered(data.data.recovered.value)
                    setDeaths(data.data.deaths.value)
                    setUpdate(data.data.lastUpdate)
                   
                })
        }
        countryGet()
    }, [myparam])

    

    

    return (
    <Container>
        <Link to="/">
        <h1>Covid-19 in {myparam}</h1>
        </Link>
        <Text>    
        <h1 className="red">Confirmed: {confirmed}</h1>
        <h1 className="green">Recovered: {recovered}</h1>
        <h1 className="darkGrey">Deaths: {deaths}</h1>
        </Text>

        <p>Ultima vez atualizado: {update} </p>
    </Container>
    )
}

