import styles from './CommonFooter.module.scss'

function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination_button}>
          <img src='src\assets\icons\icon-arrowLeft.svg' alt='leftBtn'></img>
        </button>

        {/* 변경 */}
        <span>1</span>

        <button className={styles.pagination_button}>
          <img src='src\assets\icons\icon-arrowRight.svg' alt='rightBtn'></img>
        </button>
      </div>
    </footer>
  )
}

export default CommonFooter
