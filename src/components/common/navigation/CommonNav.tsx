import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './CommonNav.module.scss'
import navJson from './nav.json'

interface Navigation{
  index : number,
  path : string,
  label : string,
  searchValue : string,
  isActive : boolean,
}

function CommonNav() {
  const [navigation,setNavigation] = useState<Navigation[]>(navJson); // Label 반복문으로 표시

  // useState 반응성 데이터 반복 호출
  const navLinks = navigation.map((item:Navigation) => {
    return(      
      <Link to={item.path} className={styles.navigation_menu} key={item.path}>
        <span className={styles.navigation_menu_label}>{item.label}</span>
      </Link>
    )
  })

  return (
    <div className={styles.navigation}>{navLinks}</div>
  )
}

export default CommonNav
