import React from 'react'

import './navigation-item.styles.css'

class NavigationItem extends React.Component {
  
  handleClick = (section) => (e) => {
    e.preventDefault()
    const { handleClick } = this.props

    handleClick && handleClick(section)
  }

  render() {
    const { section, label } = this.props

    return (
      <li className="wc-navigation-item">
        <a href={`#${section}`} onClick={this.handleClick(section)}>{label}</a>
      </li>
    )
  }
}


export default NavigationItem
