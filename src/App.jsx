import { useEffect } from 'react'
import RootLayout from './Routes/RootLayout'

import { themeChange } from 'theme-change'
function App() {
  
 
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <>
       
      <RootLayout />
    </>
  )
}

export default App
