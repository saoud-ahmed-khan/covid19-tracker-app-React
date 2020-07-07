import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import "./CHART.CSS";

const usestyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    maxWidth:345,


    [theme.breakpoints.down('sm')]: {      alignItems: 'center',
      marginLeft:200,
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
export const Doughnt = (props) => {
    const classes= usestyles
    const data = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
            {

                backgroundColor: ['#ADDDE6', '#B2FF66', '#FF6666'],
                borderColor: 'black',
                borderWidth: 2,
                hoverBackgroundColor: ['blue', 'green', 'red'],
                hoverBorderColor: ['#ADDDE6', '#B2FF66', '#FF6666'],
                data: [props.confirm, props.recover, props.deaths]
            }
        ]
    };

    return (
        <div className="bar" >
            <Bar className={classes.root}
                data={data}
                width={200}
                height={300}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    legend:{
                        display: false
                    },
                }}
            />
        </div>
    )
}
