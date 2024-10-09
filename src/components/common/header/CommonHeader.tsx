import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logoBox}>
        <img className = {styles.header_logoBox_logo} src='src\assets\images\images.jpeg' alt='logo_img'></img>
        <span className={styles.header_logoBox_title}>PhotoSplash</span>
      </div>
      <div className={styles.header_profileBox}>
        <button className={styles.header_profileBox_button}>사진제출</button>
        <button className={styles.header_profileBox_button}>북마크</button>
        <span className={styles.header_profileBox_userName}>Dino | s24020@gsm.hs.kr</span>
      </div>
    </div>
  )
}

export default CommonHeader
