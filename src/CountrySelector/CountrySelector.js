import React , {useContext}from "react"
import NativeSelect from '@material-ui/core/NativeSelect';
import { covidcontext } from "../context/covidcontext";
import './cs.css'


const CountrySelector = ()=>{
    const covid = useContext(covidcontext)
    const {seturl,CountryName,url} = covid
     const allCountries = CountryName.countries ? CountryName.countries : []
    return(
        <div className = "nativeSelect">
          <h1 className="heading">  Select Country for detail</h1>
            <NativeSelect  variant="filled" onChange = {(e)=> seturl(e.target.value)} className = 'countryPicker'>
              <option value="">Select Country</option>
              {allCountries.map((country)=> <option key={country.name} value={country.name}>{country.name}</option>)}
{console.log(url)
}
          </NativeSelect>
        </div>
    )
}
export default CountrySelector