import React, { useState } from 'react'
import NavBar from './components/NavBar'
import LargeContainer from './components/LargeContainer'
import SmallContainer from './components/SmallContainer'

function App() {
  const [mode, setMode] = useState(true);

   function toggle() {
    if(mode){
      setMode(false);
    }else{
      setMode(true);
    }
  }
  return (
    <>
      <NavBar mode={mode} toggle={toggle}></NavBar>
      <LargeContainer mode={mode}/>
      <SmallContainer></SmallContainer>
    </>
  )
}

export default App