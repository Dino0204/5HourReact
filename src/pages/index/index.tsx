import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { imageData } from '@/recoil/selectors/imageSelectors';

import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonFooter from '@/components/common/footer/CommonFooter';
import Card from './components/Card';
import { CardDTO } from './types/card';

import styles from './styles/index.module.scss';


function Index() {
  const imgSelector = useRecoilValue(imageData)
  const [imgData,setImgData] = useState<CardDTO[]>([]);

  const CARD_LIST = imgSelector.data.results.map((card:CardDTO)=>{
    return(
      <Card data={card} key = {card.id}/>
    )
  })

  return (
    <div className={styles.page}>
      {/* 공통헤더  */}
      <CommonHeader/>
      {/* 공통네비 */}
      <CommonNav/>
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
            <CommonSearchBar/>
          </div>
        </div>
        <div className={styles.page_contents_imageBox}> 
          {CARD_LIST}
        </div>
      </div>    
      {/* 공통푸터 */}
      <CommonFooter/>
    </div>
  )
}

export default Index
