import React from 'react'
import { Grid } from '@material-ui/core'
import './cd.css'
import { BarChart } from "../chart/BarChart";
import { Doughnt } from "../chart/doughnt";
import { covidcontext } from "../context/covidcontext";
import { makeStyles } from '@material-ui/core/styles';
import CountryCard from "../cardforcountry/CountryCard";
import '../chart/CHART.CSS'

const usestyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        marginRight:'50',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            marginLeft:'500'
        },
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.up('md')]: {

        },

        [theme.breakpoints.up('lg')]: {

        }
        
    },
    chart:
    {marginRight:'30px',

        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.up('md')]: {

        },

        [theme.breakpoints.up('lg')]: {

        }  
    }
    
}));

export const CountryData = () => {
    const covid = React.useContext(covidcontext)
    const { CountryData, url } = covid
    const classes = usestyles
    return (


        <div className="main">

            <h1 className="HEADING">COVID-19 IN {url}</h1>
            <Grid spacing={5} container direction="row"
                textAlign="center"
                justify="space-evenly "
                alignItems="center">
                <Grid item xs={12} md={4} sm={12} lg={4}>
                    <CountryCard></CountryCard>i
                </Grid>
                <Grid item md={4} xs={12} className="canvas-container" sm={12} lg={4}>
                    <BarChart confirm={CountryData.cases} recover={CountryData.recovered} 
                    death={CountryData.deaths}></BarChart>
                </Grid>
                <Grid className={classes.chart} item xs={12} md={4} sm={12} lg={4}>
                   <Doughnt  confirm={CountryData.cases} recover={CountryData.recovered} 
                    deaths={CountryData.deaths}></Doughnt>
        </Grid>

            </Grid>
        </div>
    )
}
