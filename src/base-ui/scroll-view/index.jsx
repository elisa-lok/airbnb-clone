import React, { memo, useEffect, useState, useRef} from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left';
import IconArrowRight from '@/assets/svg/icon_arrow_right';

const ScrollView = memo(function ScrollView(props) {
  const [ showLeft, setShowLeft ] = useState(false);
  const [ showRight, setShowRight ] = useState(false);
  const [ posIndex, setPosIndex ] = useState(0);

  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children])

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newoffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newoffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newoffsetLeft);
    setShowLeft(newoffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {  showLeft && <div className='control left' onClick={e => controlClickHandle(false)}>
        <IconArrowLeft/>
      </div>}
      {  showRight && <div className='control right' onClick={e => controlClickHandle(true)}>
        <IconArrowRight/>
      </div> }
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}> 
         {props.children}
        </div>
      </div>
      
    </ViewWrapper>
  )
})

ScrollView.propTypes = {

}

export default ScrollView
