import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../css/loanTwo.css'

// Register the required elements and components
ChartJS.register(ArcElement, Tooltip, Legend);

const LoanSecTwo = () => {
    const data = {
        labels: ['Loan', 'Interest', 'Principal'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
      cutoutPercentage: 70, // Adjust this value to control the size of the donut hole
      maintainAspectRatio: false, // Disable the maintainAspectRatio option
  };

  const chartStyle = {
      height: '300px', // Adjust the height as needed
  };

  return (
    <div className='LoanTwo'>
      <div className="L">
        <h1 style={{fontFamily:'sans-serif',textAlign:'center'}}>Loan vs Interest vs Principal</h1>
        <div style={chartStyle}><Doughnut data={data} options={options} /></div>
      </div>
    </div>
  )

};

export default LoanSecTwo ;

