"use client"

import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const Chart = ({ accounts }: DoughnutChartProps) => {
  const flattenedAccounts = accounts.flat();

  // Map over the flattened accounts array
  const accountNames = flattenedAccounts.map((a) => a.name);
  const balances = flattenedAccounts.map((a) => a.currentBalance);

  const data= {
    datasets: [
        {
            label: 'Banks',
            data: balances,
            backgroundColor: ['#9B86BD','#7776B3','#5A639C']
        }
    ],
    labels :accountNames
  }
  return (
      <PolarArea data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
              angleLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
        },
        plugins:{
            legend:{
                display:false
            }
        }
      }}/>
  );
};

export default Chart;
