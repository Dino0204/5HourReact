import styles from './DetailDialog.module.scss'
import { CardDTO, Tag } from '@/pages/index/types/card'

interface Props {
  data: CardDTO
  handleDialog: (eventValue: boolean) => void
}

function DetailDialog({data,handleDialog}: Props) {
  const closeDialog = () => {
    handleDialog(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.container_dialog}>
        <header className={styles.container_dialog_header}>
          <div className={styles.close}>
            <button className={styles.close_button} onClick={closeDialog}>
              {/*Google Icon*/}
              <span className="material-symbols-outlined" style={{fontSize:28 + "px"}}>
                close
              </span>
            </button>
            <img src={data.user.profile_image.small} alt="authorProfileImg" className={styles.close_authorImage}/>
            <span className={styles.close_authorName}>
              {data.user.name}
            </span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark_button}>
              {/*Google Icon*/}
              <span className="material-symbols-outlined" style={{fontSize:16 + "px"}}>
                favorite
              </span>
              북마크
            </button>
            <button className={styles.bookmark_button}>다운로드</button>
          </div>
        </header>
        <main className={styles.container_dialog_body}>
          <img src={data.urls.small} alt="detailImage" className={styles.image}/>
        </main>
        <footer className={styles.container_dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                {data.width}X{data.width}
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>업로드</span>
              <span className={styles.infoBox_item_value}>{data.created_at.split("T")[0]}</span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>마지막 업데이트</span>
              <span className={styles.infoBox_item_value}>{data.updated_at.split("T")[0]}</span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>다운로드</span>
              <span className={styles.infoBox_item_value}>{data.likes}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DetailDialog
