import { IMachine } from '../../../interfaces/machine.interface'
import Map from '../../base/map/map.component'
import Block from './block/block.component'

interface IProps {
  machine: IMachine,
}

const MachineInfoModal = ({ machine }: IProps) => {
  return <div className="body">
    <div className="map-container">
      <Map></Map>
    </div>
    <div className="blocks-container">
      <Block title={<p>Status</p>} text={<div className='parts'><div className={`status${machine?.status ? ` online` : ` offline`}`}></div> <p>{machine?.status ? 'Online' : 'Offline'}</p></div>}></Block>
      <Block title={<p>Stock</p>} text={<p>{machine.stock} units</p>}></Block>
      <Block title={<p>Temperature</p>} text={<p>{machine.temperature}°C</p>} backgroundColor={`#ade8f470`}></Block>
      <Block title={<p>Available</p>} text={<p>{machine.available ? `Yes` : `${machine.reason}`}</p>}></Block>
      <Block title={<p>Sold</p>} text={<p>{machine.stock} units</p>} square></Block>
      <Block title={<p>Profit</p>} text={<p>$0</p>} backgroundColor={`#d8f3dc85`} square></Block>
      <Block title={<p>Spending</p>} text={<p>$0</p>} backgroundColor={`#f284823e`} square></Block>
      <Block title={<p>Sold <span className='duration'>(24H)</span></p>} text={<p>$0</p>} square></Block>
      <Block title={<p>Profit <span className='duration'>(24H)</span></p>} text={<p>$0</p>} backgroundColor={`#d8f3dc99`} square></Block>
      <Block title={<p>Spending <span className='duration'>(24H)</span></p>} text={<p>$0</p>} backgroundColor={`#f284823e`} square></Block>
    </div>
  </div>
}

export default MachineInfoModal