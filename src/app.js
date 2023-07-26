import React, { memo } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useRoutes } from 'react-router-dom'
import routes from './router'

export default memo(function App() {
  return (
    <div className='app'>
      <AppHeader/>
      <div className='page'>
        {useRoutes(
         routes
        )}
      </div>
      <AppFooter/>
    </div>
  )
})
