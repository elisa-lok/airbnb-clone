import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(function Demo(props) {
  const names = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh", "iii", "jjj","abc","def"];
  const [selectIndex, setSelectIndex] = useState(0);

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if(newIndex < 0 )newIndex = names.length -1;
    if(newIndex > names.length -1) newIndex = 0;
    setSelectIndex(newIndex);
    console.log(newIndex);
  }

  return (
    <DemoWrapper>
      <div lassName='control'>
        <button onClick={e => toggleClickHandle(false)}>prev</button>
        <button onClick={e => toggleClickHandle(true)}>next</button>
      </div>
      <div className='list'>
        <Indicator selectIndex={selectIndex}>
          {
            names.map(item => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
