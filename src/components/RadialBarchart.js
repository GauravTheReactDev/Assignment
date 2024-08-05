import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = () => {
    const options = {
        chart: {
            type: 'radialBar',
            height: 200
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: '5px',
                        color: '#fff',
                        offsetY: 10,

                    },
                    value: {
                        offsetY: -16,
                        fontSize: '16px',
                        color: '#fff',
                        formatter: (val) => `${val}%`,
                    },
                },
            },
        },
        fill: {
            type: 'solid',
            colors: ['#87a4ff'], // Bar color
        },
        stroke: {
            lineCap: 'round',
        },
        labels: [`Goal Completed`],
    };

    const series = [70]; // Set percentage value

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '150px',
            }}
        >
            <Chart options={options} series={series} type="radialBar" height={200} />
            <div style={{
                fontSize: '8px',
                marginTop: -10
            }}>
                *This values has been rounded off
            </div>
        </div >
    );
};

export default RadialBarChart;
