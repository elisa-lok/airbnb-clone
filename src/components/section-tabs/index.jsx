import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { TabsWrapper } from './style'
import classnames from 'classnames';

const SectionTabs = memo(function SectionTabs(props) {
  const { tabNames= [], tabClick } = props;
  const [ currentIndex, setCurrentIndex ] = useState(0);

  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    tabClick(index,item);
  }

  return (
    <TabsWrapper>
      { tabNames.map( (item, index) => {
        return (<div 
        className={classnames("item", {active: index === currentIndex})} 
        key={index} 
        onClick={e => itemClickHandle(index, item)}>
          {item}
        </div>)
       })}
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTabs
