import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
//import RoomItem from '@/components/room-item'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  /** get data fron redux */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
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
      <div className='good-price'>
          <SectionHeader title= {goodPriceInfo.title} />
          <SectionRooms roomList = {goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home