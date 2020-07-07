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
          <h2 className="heading">Select Country</h>
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