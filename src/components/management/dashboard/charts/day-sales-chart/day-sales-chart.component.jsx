import './day-sales-chart.css'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DaySalesChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    var myChart = null;
    setTimeout(() => {
      const chartCtx = chartRef.current.getContext('2d');

      // Create an array of labels for the previous 3 days and the current day
      const today = new Date();
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const labels = [];
      for (let i = 3; i >= 0; i--) {
        const day = new Date(today);
        day.setDate(today.getDate() - i);
        labels.push(days[day.getDay()]);
      }

      // Create an array of data for the number of pizzas sold in each day
      const values = [];
      for (let i = 0; i < labels.length; i++) {
        const dayData = data.filter((d) => d.day === labels[i]);
        if (dayData.length > 0) {
          values.push(dayData[0].count);
        } else {
          values.push(0);
        }
      }

      myChart = new Chart(chartCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Number of Pizzas Sold',
              data: values,
              backgroundColor: 'rgba(255, 193, 99, 0.2)',
              borderColor: 'rgba(255, 193, 99, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    return "$" + value;
                  },
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false // hide legend
            }
          }
        },
      });
    }, 0);
  }, [data]);

  return <canvas ref={chartRef} />
};

export default DaySalesChart;