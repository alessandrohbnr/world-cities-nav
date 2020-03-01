import React from 'react'

const NavigationLine = ({ position }) => {
  return (
    <div className="wc-nav-line-container">
      <span className="wc-nav-line" style={position}></span>
    </div>
  )
}

export default NavigationLine