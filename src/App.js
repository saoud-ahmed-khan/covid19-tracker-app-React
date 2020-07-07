
import React from 'react';
import Header from "../src/header/header";
import { CovidProvider } from "../src/context/covidcontext";
import {CardsData }  from "../src/cardData/CardsData";
import CountrySelector from "../src/CountrySelector/CountrySelector";
import { CountryData } from "./CountryData/CountryData";
import Map from "../src/map/map";
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <CovidProvider>     
        <CardsData></CardsData>
        <CountrySelector></CountrySelector>
        <CountryData></CountryData>
        <Map></Map>
      </CovidProvider>
    </div>
  )
}

export default App;
