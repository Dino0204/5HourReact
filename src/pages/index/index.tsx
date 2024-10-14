import { useMemo, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { imageData } from '@/recoil/selectors/imageSelectors';

import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonFooter from '@/components/common/footer/CommonFooter';
import Card from './components/Card';
import { CardDTO } from './types/card';
import DetailDialog from '@/components/common/dialog/DetailDialog';

import styles from './styles/index.module.scss';


function Index() {
  const imgSelector = useRecoilValueLoadable(imageData)
  const [imgData,setImgData] = useState<CardDTO>();
  const [open,setOpen] = useState<boolean>(false) // 이미지 상세 다이얼로그 (모달)

  // 반복적으로 사용되는 부분을 저장 (계산된 데이터로 저장) | 읽기쓰기 모두 가능한 훅
  const CARD_LIST = useMemo(() => {
    if(imgSelector.state === "hasValue"){
      const result = imgSelector.contents.results.map((card:CardDTO)=>{
        return <Card data={card} key = {card.id} handleDialog={setOpen} handleSetData={setImgData}/>   
      })
      return result
    }
    // imgSelector.state === "hasLoading"
    else{
      return <div>Loading...</div>
    }
  },[imgSelector])

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
      {open && <DetailDialog data={imgData} handleDialog={setOpen}/>}
    </div>
  )
}

export default Index
