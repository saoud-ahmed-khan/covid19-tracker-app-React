
import React from 'react';
import logo from "../pics/l.png"
import './header.css';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const usestyles = makeStyles (theme => ({
  root: {
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      width:"600px",
      height:'120px',    },
      [theme.breakpoints.down('xs')]: {
        width:"400px",
        height:'120px',    },
    [theme.breakpoints.up('md')]: {
      width:"600px",
      height:'180px',    },
    
    [theme.breakpoints.up('lg')]: {
      width:"750px",
      height:'220px',
    }
  },
}));
function Header() {
  const classes=usestyles();
  return (
   
    <Grid  direction="row"  >
      <Grid item xs={12} container
     spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
         <img src={logo} className={classes.root} alt="logo"></img>
     
    </Grid>
    
  </Grid>
  );
}

export default Header;
 