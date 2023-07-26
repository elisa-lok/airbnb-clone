import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

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
        <h2>{goodPriceInfo.title}</h2>
        <ul>
          {goodPriceInfo.list.map( item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home