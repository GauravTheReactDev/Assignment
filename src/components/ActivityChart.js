import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import './ListCard.css';


const BarChart = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly');

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
        opacity: 100,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ['white'],
      },
    },
    xaxis: {
      categories: [5, '', 9, '', 11, '', '', 13, '', 15, , '', 17, '', 19, '', 21, '', '', 23, '', 25, '', 27],
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    colors: ['#87a4ff'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        color: 'white',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      y: {
        formatter: (val) => `${val}`,
        title: {
          formatter: () => 'Sales: ',
        },
      },
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [3500, 10000, 4000, 3500, 6000, 6000, 5200, 5400, 4800, 1200, 7000, 7500, 6000, 11000, 8000, 13000, 17000, 10500, 7000, 4800, 5200, 10200, 7500, 6000],
    },
  ];

  return (
    <div id="chart" style={{ position: 'relative', padding: '20px', height: '280px' }} className="list-card bg-dark text-light w-100 ">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Card.Title className="mr-auto fw-bold" >Activity</Card.Title>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          style={{
            padding: '4px 8px',
            borderRadius: '16px',
            border: '1px solid #ccc',
            fontSize: '12px'
          }}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <Chart options={options} series={series} type="bar" height={220} />
    </div>
  );
};

export default BarChart;
