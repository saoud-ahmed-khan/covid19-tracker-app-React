import React from 'react';
import Card from '@material-ui/core/Card';
import '../header/header.css'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./card.module.css";
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign:'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 34,
    textTransform:"uppercase",
    color: props => props.backgroundColor
  },
  pos: {
    marginBottom: 12,
  },
  style:
{
   borderColor:props =>props.backgroundColor,
   color: props => props.backgroundColor,
   textAlign:'center'
},


}
);


export default function Cards(props) {
  const classes = useStyles(props);
  
  return (
<div  >
  {
  }
<Card  className={classes.style} variant="outlined" >
      <CardContent > 
        <Typography className={classes.title} color="textSecondary" gutterBottom >
          {props.name}
        </Typography>
        <Typography variant="h3" color="danger" component="h2">
        {props.number} 
        <CountUp start={0} end={props.number} duration={3} separator="," />  
        </Typography>
        
        <Typography variant="body2" component="p" gutterBottom>
         
          
        </Typography>
        <Typography variant="body2" component="p">
          The data is updated on {new Date(props.updated).toDateString()}
          
        </Typography>
      </CardContent>
      
    </Card>
</div>



























  );
}
