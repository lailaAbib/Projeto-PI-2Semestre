import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
        labels: ["Out/20", "Nov/20", "Dez/20", "Jan/21", "Fev/21", "Mai/21", "Jun/21", "Jul/21", "Ago/21","Set/21", "Out/21", "Nov/21"],

  datasets: [
    {
      label: 'Consumo de Agua em litros',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [150, 130, 120, 160, 135, 155, 290, 145, 140, 95, 60, 25]
    }
  ]
};


function ChartBar() {
    return (
      <div>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
  export default ChartBar;


