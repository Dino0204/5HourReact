import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './CommonNav.module.scss'
import navJson from './nav.json'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageState } from '@/recoil/atoms/pagaState';
import { searchState } from '@/recoil/atoms/searchState';

interface Navigation{
  index : number,
  path : string,
  label : string,
  searchValue : string,
  isActive : boolean,
}

function CommonNav() {
  const location = useLocation()
  const [navigation,setNavigation] = useState<Navigation[]>(navJson); // Label 반복문으로 표시
  const [page,setPage] = useRecoilState(pageState)
  const [search,setSearch] = useRecoilState(searchState)

  useEffect(() => { 
    navigation.forEach((nav:Navigation) => {
      nav.isActive = false

      if(nav.path === location.pathname || location.pathname.includes(nav.path)){
        nav.isActive = true
        setSearch(nav.searchValue)
        setPage(1)
      }
    })
    setNavigation([...navigation])
  },[location.pathname])

  // useState 반응성 데이터 반복 호출
  const navLinks = navigation.map((item:Navigation) => {
    return(      
      <Link to={item.path} className={ item.isActive ?  `${styles.navigation_menu} ${styles.active}` : `${styles.navigation_menu} ${styles.inactive}`} key={item.path}>
        <span className={styles.navigation_menu_label}>{item.label}</span>
      </Link>
    )
  })

  return (
    <nav className={styles.navigation}>{navLinks}</nav>
  )
}

export default CommonNav
