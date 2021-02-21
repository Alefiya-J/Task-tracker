import React from 'react'

const Button = ({color,text,onClick}) => {
  return (
    <div>
      <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color:'steelblue'
}

export default Button
