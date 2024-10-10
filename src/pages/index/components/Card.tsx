import styles from './Card.module.scss'

function Card() {
  const openDialog = () =>{
    console.log('card')
  }


  return (
    <div className={styles.card} onClick={openDialog}>
      <img src='' alt='' className={styles.card_image}></img>
    </div>
  )
}
export default Card
