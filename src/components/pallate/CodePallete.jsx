import React, { useState } from 'react'
import './CodePallete.css'
const CodePallete = () => {
  const [fileOpen, setFileopen]=useState(false);
  return (
    <div className="codepallet">
      <div className="infor">
        <p>welcome to vmstudio</p>
      </div>
    </div>
  )
}

export default CodePallete