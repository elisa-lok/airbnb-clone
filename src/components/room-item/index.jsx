import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from './style';
import Rating from '@mui/material/Rating';

const RoomItem = memo(function RoomItem(props) {
  const { itemData } = props;

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.textColor || '#39576a'}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt='' />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join('.')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>
          ¥{itemData.price}元/晚
        </div>
        <div className='bottom'>
          <Rating name="read-only" value={5} readOnly sx={{fontSize: "12px", color: "red"}}/>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,

}

export default RoomItem
