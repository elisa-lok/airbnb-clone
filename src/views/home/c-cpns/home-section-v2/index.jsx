import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo(function HomeSectionV2(props) {
    /** get data from props */
    const { infoData } = props;

    /** tab names */
    const initialName = Object.keys(infoData.dest_list)[0];
    const [ name, setName ] = useState(initialName);
    const tabNames = infoData.dest_address?.map(item => item.name);
  
    /** tab click handle */
    const tabClickHandle = useCallback(function(index, name){
      setName(name);
    },[])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle= {infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2
