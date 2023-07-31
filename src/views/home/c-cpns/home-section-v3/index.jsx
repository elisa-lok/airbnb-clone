import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import LongForItem from '@/components/longfor-item';
import ScrollView from '@/base-ui/scroll-view';

const HomeSectionV3 = memo(function HomeSectionV3(props) {
  const { infoData } = props;

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
       <ScrollView>
       { 
          infoData.list.map(item => {
            return <LongForItem key={item.city} itemData={item} />
          })
        }
       </ScrollView>
      </div>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
