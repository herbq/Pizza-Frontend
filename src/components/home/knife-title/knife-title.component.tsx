import './knife-title.css'
import knifeIcon from  '../../../assets/knife-icon.png'

interface IProps {
  text: string,
  column?: boolean,
}

const KnifeTitle = ({ text, column }: IProps) => {
  return <div className={`knife-title-container${column? ` column` : ``}`}>
    <img src={knifeIcon} alt="" />
    <p>{text}</p>
  </div>
}

export default KnifeTitle;