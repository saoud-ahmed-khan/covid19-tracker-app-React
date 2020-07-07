import { useEffect,useState } from "react";
import axios from "axios"


export const FetchAPI = () =>{
  
const [globalData,setGlobalData] = useState({})
const [CountryName,setCountryName] = useState({})
const [url , seturl ] = useState("Pakistan")
const [CountryData , setCountryData ] = useState({})
const [MapData , setMapData ] = useState([])

useEffect(()=>{
  axios.get(`https://corona.lmao.ninja/v2/countries`)
    .then(response => response.data)
    .then (data => setMapData(data) )
    .catch (err => console.log(err))
},[])
useEffect(()=>{
  axios.get(`https://disease.sh/v2/all`)
  .then(response => response.data)
  .then (data => setGlobalData(data) )
  .catch (err => console.log(err))
},[])
useEffect(()=>{
  axios.get(`https://covid19.mathdro.id/api/countries`)
  .then(response => response.data)
  .then (data => setCountryName(data) )
  .catch (err => console.log(err))
  
},[]
)
useEffect(()=>{
  axios.get(`https://corona.lmao.ninja/v2/countries/${url}`)
  .then(response => response.data)
  .then (data => setCountryData(data) )
  .catch (err => console.log(err))
  
},[url,seturl]
)   
return {globalData,CountryName,seturl,url,CountryData,MapData}

}
 