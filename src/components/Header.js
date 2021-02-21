import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  const onclick = (e) => {
    onAdd()
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      { location.pathname === '/' &&
        <Button color= {showAdd ? 'red': 'green'} 
          text={showAdd?'Close':'Add'} onClick={onclick}/>
      }
    </header>
  )
}

Header.defaultProps = {
  title :'Task Tracker'
}

export default Header
