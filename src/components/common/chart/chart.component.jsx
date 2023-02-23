import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function MyChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'My Dataset',
              data: [12, 19, 3, 5, 2, 3],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            responsive: true
          }
        });
      }
    }, 0);
  }, [chartRef]);

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}


export default MyChart;