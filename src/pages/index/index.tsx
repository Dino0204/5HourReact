import styles from './styles/index.module.scss';


function Index() {
  return (
    <div className={styles.page}>
      {/* 공통헤더  */}
      {/* 공통네비 */}
      <div className={styles.page_contents}>
        <div className={styles.page_contents_introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper_title}>PhotoSplash</span>
            <span className={styles.wrapper_desc}>
              시각 자료 출처
              <br/>
              모든 크리에이터의 지원을 받습니다.
            </span>
            {/* 검색창  */}
          </div>
        </div>
        <div className={styles.page_contents_imageBox}></div>
      </div>    
      {/* 공통푸터 */}
    </div>
  )
}

export default Index
