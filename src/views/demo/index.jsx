import React, { memo } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(function Demo(props) {
  return (
    <DemoWrapper>
      demo page
    </DemoWrapper>
  )
})

export default Demo
