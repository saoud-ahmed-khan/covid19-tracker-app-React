import React from 'react'
import {createContext} from 'react'
import { FetchAPI } from "../api/api";
export const covidcontext= createContext();


export const CovidProvider = ({children}) => {
    const {globalData}= FetchAPI();
    const {CountryName}= FetchAPI();
    const {seturl,url, CountryData,MapData} = FetchAPI();
    return (
            <covidcontext.Provider value={{globalData , CountryName, seturl,url,CountryData,MapData}}>
                {children}
            </covidcontext.Provider>
        
    )
}
