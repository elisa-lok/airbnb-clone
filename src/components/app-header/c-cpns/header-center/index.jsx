import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '../../../../assets/svg/icon_search_bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
        <div className="text">
          搜索想要的房源
        </div>

        <span className="icon">
          <IconSearchBar/>
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter