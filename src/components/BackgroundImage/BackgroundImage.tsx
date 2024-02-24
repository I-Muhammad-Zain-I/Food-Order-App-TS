import React, { useState, useEffect, ReactElement } from 'react'
import { images } from '../../constants/index.js'
import classes from './BackgroundImage.module.css'
type Props = {
  children: ReactElement
}




const BackgroundImage = (props: Props) => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  useEffect(() => {
    const inv = setInterval(() => {
      // +1(offset) to fix loophole case of [0 % N == 0]
      // (bi+1) % 3 ensures value of bi remains in [0,2] range
      setBackgroundImage((bi) => (bi+1) % 3)
    },3000)

    return () => clearInterval(inv)
  }, [])




  
  return (
    <div 
      style={{backgroundImage: `url(${images[backgroundImage]})`}}
      className={classes['background-image']}
      >
      
      {props.children}
    </div>
  )
}

export default BackgroundImage