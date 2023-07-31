import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
  /** get data fron redux */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
  }), shallowEqual)

  /** dispatch */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxx'));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData= {discountInfo} /> }
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData= {recommendInfo} /> }
        { isEmptyO(longforInfo) && <HomeSectionV3 infoData= {longforInfo} /> }     
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData= {goodPriceInfo} /> }
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData= {highScoreInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default Home