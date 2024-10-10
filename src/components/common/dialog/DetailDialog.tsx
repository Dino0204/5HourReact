import React from 'react'
import styles from './DetailDialog.module.scss'


function DetailDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.container_dialog}>
        <header className={styles.container_dialog_header}>
          <div className={styles.close}>
            <button className={styles.close_button}>{/*Google Icon*/}</button>
            <img src="" alt="authorProfileImg" className={styles.close_authorImg}/>
            <span className={styles.close_authorName}>디노</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark_button}>
              {/*Google Icon*/}
              북마크
            </button>
            <button className={styles.bookmark_button}>다운로드</button>
          </div>
        </header>
        <main className={styles.container_dialog_body}>
          <img src="" alt="detailImage" className={styles.image}/>
        </main>
        <footer className={styles.container_dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>상세 데이터 조회</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div className={styles.tagBox_tag}>태그 데이터</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DetailDialog
