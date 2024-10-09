import styles from './CommonSearchBar.module.scss'

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>CommonSearchBar
      <div className={styles.searchBar_search}>
        <input type='text' placeholder='찾으실 이미지를 검색하세요.' className={styles.searchBar_search_input}></input>
        <img src='src/asssets/icons/icon-search.svg'></img>
      </div> 
    </div>
  )
}

export default CommonSearchBar
