import './loading.css'

const Loading = ({ text }: {text: string}) => {
  return <div className='pizza-container'>
    <div className='pizza'>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
      <div className='slice'></div>
    </div>
    <p>{text} ...</p>
  </div>

}

export default Loading