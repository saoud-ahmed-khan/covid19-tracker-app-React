import React from 'react'
import { useState, useContext } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { covidcontext } from "../context/covidcontext"
import Grid from '@material-ui/core/Grid';

export default function Map() {

    const covid = useContext(covidcontext)
    const {MapData} = covid
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "90vh",
        latitude: 30,
        longitude: 70,
        zoom: 3.5,
      });
    return (
        <Grid direction="row" justify="center" alignItems="center">
       <Grid item xs={12}> 
      <ReactMapGL 
        mapStyle="mapbox://styles/mapbox/light-v9"
        {...viewport} 
      mapboxApiAccessToken = {"pk.eyJ1IjoiaGFtemEtYWx2aSIsImEiOiJja2J4b3YwZmcwODgyMnpxbjNqajRwMWF5In0.eNG2Xp-V76yb_jHt62l2PA"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        {MapData.map((country)=>{
            return <Marker key= {country.country} latitude={country.countryInfo.lat}    
            longitude={country.countryInfo.long}>
            <div>    
            <img src = {country.countryInfo.flag} alt="countries" width = "25px"/><br></br>
            {country.cases}
            <abbr 
             title = {`Confirm: ${country.cases} Recovered: ${country.recovered}
         Deaths: ${country.deaths}`}></abbr>
            </div>
            </Marker>
        }
            
        )}
    </ReactMapGL>
        </Grid>
        </Grid>
    )
}
