import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo(function Indicator(props) {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  

  useEffect(( )=> {
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;

    let distance = itemLeft + itemWidth / 2 - contentWidth / 2;
    if(distance < 0) distance = 0;//left special
    const totalDistance = contentScroll - contentWidth;
    if(distance > totalDistance) distance = totalDistance;//right special

    contentRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
      
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number,
}

export default Indicator
