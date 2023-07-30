import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo(function SectionFooter(props) {
  const { name = "" } = props;

  let showMessage = "显示全部";
  if(name){
    showMessage = `显示更多${name}房源`;
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className='info'>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
