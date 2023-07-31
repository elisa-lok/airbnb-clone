import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
import ScrollView from '@/base-ui/scroll-view';
import SectionFooter from '@/components/section-footer';

const HomeSectionV4 = memo(function HomeSectionV4(props) {
  const { infoData } = props;

  return (
    <SectionV4Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='room-list'>
       <ScrollView>
       { infoData.list.map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth="20%" />
        })}
      </ScrollView>      
      </div>
      <SectionFooter name="plus" />
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV4
