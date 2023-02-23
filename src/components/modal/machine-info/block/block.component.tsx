import { ReactElement } from 'react';
import './block.css'

interface IProps {
    title: ReactElement,
    text: ReactElement,
    square?: boolean,
    backgroundColor?: string,
}

const Block = ({ title, text, square, backgroundColor }: IProps) => {
    return <div style={{ backgroundColor }} className={`block-container${square ? ` square` : ``}`}>
        <p className='subtitle'>{title}</p>
        <p className='text'>{text}</p>
    </div>
}

export default Block;