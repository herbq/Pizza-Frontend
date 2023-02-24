import { ReactNode } from 'react';
import './chart-container.css'

interface IProps {
  className?: string,
  children: ReactNode,
}

const ChartContainer = ({ className, children }: IProps) => {
  return <div className={`chart-container ${className}`}>
    <div className='header'>
      <h1>Average daily sales</h1>
      <p>$10.00</p>
      <h2>Sales over time</h2>
    </div>
    {children}
  </div>
}

export default ChartContainer;