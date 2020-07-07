import Cards from "../cards/cards";
import React from 'react'
import { covidcontext } from "../context/covidcontext";
import { Grid } from '@material-ui/core';
import './cardData.css'

import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
     
    },
    [theme.breakpoints.down('xs')]: {
     
    },
    [theme.breakpoints.up('md')]: {
     
    },

    [theme.breakpoints.up('lg')]: {
      
    }
  },
}));



export const CardsData = () => {
  const covid = React.useContext(covidcontext);
  const { globalData } = covid;
  const classes = usestyles

  return (
    <div className="center">
      <Grid spacing={2} className={classes.root} container
        direction="row"
        textAlign="center"
        justify="space-around
        "
        alignItems="center">
        <Grid item xs={12} md={3} sm={6} lg={3}>
          <Cards name="CONFIRMED" backgroundColor="blue" number={globalData.cases} updated={globalData.updated}></Cards>

        </Grid>
        <Grid item md={3} xs={12} sm={6} lg={3}>

          <Cards name="ACTIVE" backgroundColor="purple" number={globalData.active} updated={globalData.updated}></Cards>
        </Grid>
        <Grid item xs={12} md={3} sm={6} lg={3}>
          <Cards name="RECOVERED" backgroundColor="green" number={globalData.recovered} updated={globalData.updated}></Cards>

        </Grid>
        <Grid item md={3} xs={12} sm={6} lg={3}>

          <Cards name="DEATHS" backgroundColor="red" number={globalData.deaths} updated={globalData.updated}></Cards>
        </Grid>

      </Grid>

    </div>

  )
}


































