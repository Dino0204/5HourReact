import CommonHeader from '@/components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import Card from './components/card'

function index() {
  const[data,setData] = useState([])
  const getData = () => {

  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className={styles.page}>
      {/* 공통헤더 UI */}
      <CommonHeader/>
      <main className={styles.page_contents}>
        <Card/>
      </main>
    </div>
  )
}

export default index
