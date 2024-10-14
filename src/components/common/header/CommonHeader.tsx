import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'


function CommonHeader() {

  const navigate = useNavigate()
  
  const moveToPage = (filter : string) => {
    if (filter === "main"){
      navigate('/')
    }else if (filter === "bookmark"){
      navigate('/bookmark')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_logoBox} onClick={() => moveToPage("main")}>
        <img className={styles.header_logoBox_logo} src='src\assets\images\images.jpeg' alt='logo_img'></img>
        <span className={styles.header_logoBox_title}>PhotoSplash</span>
      </div>
      <div className={styles.header_profileBox}>
        <button className={styles.header_profileBox_button}>사진제출</button>
        <button className={styles.header_profileBox_button} onClick={() => moveToPage("bookmark")}>북마크</button>
        <span className={styles.header_profileBox_userName}>Dino | s24020@gsm.hs.kr</span>
      </div>
    </header>
  )
}

export default CommonHeader
