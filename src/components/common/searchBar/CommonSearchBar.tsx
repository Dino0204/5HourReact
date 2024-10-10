import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'

function CommonSearchBar() {
  const [search,setSearch] = useRecoilState(searchState)
  const [text,setText] = useState("")
  const onChange =  (event) => {
    setText(event.target.value)
  }

  const onSearch = () => {
    if(text === ""){
      // default
      setSearch('Korea')
    }else{
      // Input Value
      setSearch(text)
    }
  }
  
  // 키보드 
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if(event.key === "Enter"){
      if(text === ""){
        // default
        setSearch('Korea')
      }else{
        // Input Value
        setSearch(text)
      }
    }
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_search}>
        <input type='text' placeholder='찾으실 이미지를 검색하세요.' className={styles.searchBar_search_input} onChange={onChange} onKeyDown={handleKeyDown} value={text}></input>
        <img src='src\assets\icons\icon-search.svg' alt='search' onClick={onSearch}></img>
      </div> 
    </div>
  )
}

export default CommonSearchBar
