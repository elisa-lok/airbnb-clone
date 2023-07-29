import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
//import SectionHeader from '@/components/section-header'
//import RoomItem from '@/components/room-item'
//import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'

const Home = memo(() => {
  /** get data fron redux */
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
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
        <HomeSectionV1 infoData= {goodPriceInfo} />
        <HomeSectionV1 infoData= {highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home