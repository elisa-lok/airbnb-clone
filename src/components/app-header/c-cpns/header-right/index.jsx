import React, { memo, useState, useEffect} from 'react'
import { RightWrapper } from './style'
import IconGlobal from '../../../../assets/svg/icon_global'
import IconAvatar from '../../../../assets/svg/icon_avatar'
import IconProfile from '../../../../assets/svg/icon_profile'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function windowHandleClick(){
      setShowPanel(false);
    }
    window.addEventListener('click', windowHandleClick, true);

    return () => {
      window.removeEventListener('click', windowHandleClick, true);
    }
  },[]);

  function profileClickHandle() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>Login</span>
        <span className='btn'>Register</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>

      <div className='profile' onClick={profileClickHandle}>
        <IconAvatar/>
        <IconProfile/>
        {showPanel && (
             <div className='panel'>
             <div className='top'>
               <div className='item register'>Sign up</div>
               <div className='item login'>Log in</div>
             </div>
   
             <div className='bottom'>
               <div className='item'>Airbnb your home</div>
               <div className='item'>Help</div>
             </div>
           </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight