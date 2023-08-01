import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(function Detail(props) {

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
