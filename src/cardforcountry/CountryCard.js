import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { covidcontext } from "../context/covidcontext";
import Typography from '@material-ui/core/Typography';
import "./cc.css";
import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    maxWidth:345,


    [theme.breakpoints.down('sm')]: {
      maxWidth:500,
      marginLeft:200,
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
     marginLeft:0
    },
    [theme.breakpoints.up('md')]: {
     
    },

    [theme.breakpoints.up('lg')]: {
      
    }
  },
}));
export default function CountryCard(props) {
  const classes = usestyles();
  const covid = React.useContext(covidcontext)
  const { CountryData } = covid


  return ( 
      <div className="maincc">
    <Card  className={classes.root}>
        
        <CardContent>
          <div className="blue">
            <Typography variant="h3">CONFIRMED </Typography>
          <Typography gutterBottom variant="h3" component="h2">
          {CountryData.cases}
          </Typography>
          </div>
          <div className="green">
          <Typography variant="h3">RECOVER </Typography>
          <Typography gutterBottom variant="h3" component="h2">
          {CountryData.recovered}
          </Typography>
          </div>
          <div className="red">
          <Typography variant="h3">DEATHS </Typography>
          <Typography gutterBottom variant="h3" component="h2">
          {CountryData.deaths}
          </Typography>
          </div>
        </CardContent>
     
    </Card>
    </div>
  );
}
