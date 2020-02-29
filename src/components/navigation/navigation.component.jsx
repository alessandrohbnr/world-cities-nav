import React from 'react'
import NavigationItem from '../navigation-item/navigation-item.component'

import './navigation.styles.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null
    }
  }

  handleItemClick = (item) => {
    console.log(item)
  }

  render() {
    return (
      <nav className="wc-navigation">
        <ul className="wc-navigation-container">
          {this.props.list.map((item) => (
            <NavigationItem 
              key={item.section}
              handleClick={this.handleItemClick}
              {...item} />
          ))}
        </ul>
        <div className="wc-navigation-line-container">
          <span className="wc-navigation-line"></span>
        </div>
      </nav>
    )
  }
}

export default Navigation
