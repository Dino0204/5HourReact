import { CardDTO } from '../types/card'
import styles from './Card.module.scss'

interface Props{
  data:CardDTO
}

function Card({data}:Props) {
  const openDialog = () =>{
    console.log('card')
  }


  return (
    <div className={styles.card} onClick={openDialog}>
      <img src={data.urls.small} alt={data.alt_description} className={styles.card_image}></img>
    </div>
  )
}
export default Card
