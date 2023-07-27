import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'

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
          <ul className='room-list'>
              {
                 goodPriceInfo.list?.slice(0,8).map( item => {
                  return <RoomItem itemData={item} key={item.id}/>
                })
              }
            </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home