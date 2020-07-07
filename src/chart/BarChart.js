import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './CHART.CSS'
export const BarChart = (props) => {
    const data = {
        labels: [
            'CONFIRMED',
            'RECOVERED',
            'DEATHS'
        ],
        datasets: [{
            data: [props.confirm, props.recover , props.death],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
            
        }]
    };
    
      
    return (
        <div className="canvas-container">
           
        <Doughnut data={data} 
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }} />
        </div>
    )
}
