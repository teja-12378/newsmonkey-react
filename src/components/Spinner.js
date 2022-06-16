import React from 'react'
import Ajax from "./Ajax.gif"

function Spinner() {
  return (
    <div className='text-center'>
      <img src={Ajax} alt="loading" />
    </div>
  )
}

export default Spinner


  