import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function Countrylist({query}) {
const [countriesdata, setCountriesdata] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesdata(data)
    })
  },[])

  return (
    <div className="countries-container">
        {countriesdata.filter((country)=> country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
        .map((country)=>{
          return(
            <CountryCard 
            name={country.name.common}
            population={country.population}  
             region = {country.region} 
             capital={country.capital ? country.capital[0] : "No Capital"}
             flag={country.flags.svg}
              />
          )
        })}
    </div>
  )
}    
